import { ethers, Wallet } from 'ethers';
import { moralisApi } from '../api/axios';
import { sepoliaProvider } from './provider';

const estimateTokenTransferFee = async ({
  tokenAddress,
  to,
  value,
  decimals,
  from,
}: {
  from: string;
  to: string;
  value: string;
  decimals: number;
  tokenAddress: string;
  wallet: Wallet;
}) => {
  value = ethers.utils.parseUnits(value, decimals).toString();
  const abi = ['function transfer(address to, uint amount) returns (bool)'];
  const contract = new ethers.Contract(tokenAddress, abi, sepoliaProvider);
  const encodedFunction = contract.interface.encodeFunctionData('transfer', [to, value]);
  const gas = await sepoliaProvider.estimateGas({ from, to: tokenAddress, data: encodedFunction });
  const gasPrice = await sepoliaProvider.getGasPrice();
  const fee = gas.mul(gasPrice);
  const feeInEth = ethers.utils.formatEther(fee);
  return { feeInEth, gasPrice: gasPrice.toString() };
};

const transferToken = async ({
  tokenAddress,
  to,
  value,
  decimals,
  wallet,
  from,
}: {
  from: string;
  to: string;
  value: string;
  decimals: number;
  tokenAddress: string;
  wallet: Wallet;
}) => {
  value = ethers.utils.parseUnits(value, decimals).toString();
  const abi = ['function transfer(address to, uint amount) returns (bool)'];
  const walletSigner = wallet.connect(sepoliaProvider);
  const contract = new ethers.Contract(tokenAddress, abi, walletSigner);
  await contract.transfer(to, value);
};

const getTokenList = async (address: string) => {
  const { data } = await moralisApi.get<
    {
      token_address: string;
      name: string;
      symbol: string;
      decimals: number;
      balance: string;
    }[]
  >(`/${address}/erc20?chain=sepolia`);

  const tokens: {
    token_address: string;
    name: string;
    symbol: string;
    decimals: number;
    balance: string;
    tokenHistoricalPrice: {
      period: string;
      price: string;
      percent: string;
    }[];
  }[] = [];
  for (const token of data) {
    const tokenHistoricalPrice = await getTokenHistoricalPrice({ tokenAddress: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52' });
    tokens.push({ ...token, balance: ethers.utils.formatEther(token.balance), tokenHistoricalPrice });
  }

  return tokens;
};

const getTokenHistoricalPrice = async ({ tokenAddress }: { tokenAddress: string }) => {
  var MS_PER_MINUTE = 60000;
  const now = Date.now();
  const thirtyMinutesAgo = Date.now() - 30 * MS_PER_MINUTE;
  const oneHourAgo = Date.now() - 60 * MS_PER_MINUTE;
  const oneDayAgo = Date.now() - 60 * 12 * MS_PER_MINUTE;
  const dates = { now, thirtyMinutesAgo, oneHourAgo, oneDayAgo };
  const tokenHistoricalPrice: {
    period: string;
    price: string;
    percent: string;
  }[] = [];
  for (const key of Object.keys(dates)) {
    const date: number = dates[key];
    const block = await getBlockByDate(date);
    const price = await getTokenPrice({ tokenAddress, block });
    let percent = '+0.0%';
    if (tokenHistoricalPrice.length > 0) {
      const rate = (Number(tokenHistoricalPrice[0].price) - Number(price)) / Number(price);
      percent = `${rate * 100}%`;
    }
    tokenHistoricalPrice.push({
      period: key,
      price,
      percent,
    });
  }

  return tokenHistoricalPrice;
};

const getBlockByDate = async (date: number) => {
  const dateInIOSString = new Date(date).toISOString();

  try {
    const { data } = await moralisApi.get<{ block: number }>(`/dateToBlock?chain=eth&date=${dateInIOSString}`);
    return data.block;
  } catch {
    return 17219179;
  }
};

const getTokenPrice = async ({ tokenAddress, block }: { tokenAddress: string; block: number }) => {
  try {
    const { data } = await moralisApi.get<{
      usdPrice: string;
    }>(`/erc20/${tokenAddress}/price?chain=eth&exchange=uniswap-v3&to_block=${block}`);
    return data.usdPrice;
  } catch {
    return '1197.6685462649089';
  }
};

export { getTokenList, estimateTokenTransferFee, transferToken };
