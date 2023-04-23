import { ethers } from 'ethers';
import { etherscanProvider, sepoliaProvider } from './provider';

const getTransactionHistory = async ({ address, page, offset }: { address: string; page: number; offset: number }) => {
  const res = await etherscanProvider.getHistory(address);

  const panigatedRes = res.slice((page - 1) * offset, offset);

  const transactions = await Promise.all(
    panigatedRes.map(async (tx) => {
      let { from, timestamp, value, data, to, hash } = tx;
      let symbol = 'ETH';
      if (data !== '0x') {
        const contractAddress = to;
        const erc20 = new ethers.Contract(contractAddress, ['function symbol() view returns (string)'], sepoliaProvider);
        const iface = new ethers.utils.Interface(['function transfer(address to, uint amount) returns (bool)']);
        const decodedArgs = iface.decodeFunctionData(data.slice(0, 10), data);
        to = decodedArgs[0];
        value = decodedArgs[1];
        symbol = await erc20.symbol();
      }
      return {
        type: from === address ? 'send' : 'receive',
        date: new Date(timestamp * 1000).toLocaleDateString('vi-VN', { dateStyle: 'long', timeStyle: 'long' }),
        value: ethers.utils.formatEther(value),
        reference: from === address ? from : to,
        symbol,
        hash,
      };
    }),
  );
  return { page, offset, data: transactions };
};

export { getTransactionHistory };
