import { Wallet, ethers } from 'ethers';
import { sepoliaProvider } from './provider';

const estimateETHTransferFee = async (params: { from: string; to: string; value: string }) => {
  params.value = ethers.utils.parseEther(params.value).toString();
  const gas = await sepoliaProvider.estimateGas(params);
  const gasPrice = await sepoliaProvider.getGasPrice();
  const fee = gas.mul(gasPrice);
  const feeInEth = ethers.utils.formatEther(fee);
  return { feeInEth, gasPrice: gasPrice.toString() };
};

const transferETH = async ({ from, to, value, gasPrice, wallet }: { wallet: Wallet; from: string; to: string; value: string; gasPrice: string }) => {
  const txCount = await sepoliaProvider.getTransactionCount(from);
  const txResponse = await wallet.sendTransaction({ from, to, value, nonce: txCount, gasLimit: '21000', gasPrice });
  await txResponse.wait(1);
};

export { estimateETHTransferFee, transferETH };
