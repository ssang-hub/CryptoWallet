import { Wallet, ethers } from 'ethers';

const getAccountList = (wallet: Wallet) => {
  const node = ethers.utils.HDNode.fromMnemonic(wallet.mnemonic.phrase);
  wallet.
};
