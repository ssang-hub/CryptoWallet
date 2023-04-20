import AsyncStorage from '@react-native-async-storage/async-storage';
import { Wallet, ethers } from 'ethers';
import { ACCOUNT_COUNTER } from '../constants/storage';
import { sepoliaProvider } from './provider';

const getAccountCounter = async () => {
  const accountCounter = await AsyncStorage.getItem(ACCOUNT_COUNTER);
  return Number(accountCounter);
};

const getAccountList = async (wallet: Wallet) => {
  const node = ethers.utils.HDNode.fromMnemonic(wallet.mnemonic.phrase);
  const accountCounter = await getAccountCounter();
  const accounts = [...Array(accountCounter).keys()].map((index) => {
    const accountPath = ethers.utils.getAccountPath(index);
    const account = node.derivePath(accountPath);
    const { address, privateKey } = account;
    return {
      name: `Account ${index + 1}`,
      address,
      privateKey,
    };
  });
  return accounts;
};

const createAccount = async (wallet: Wallet) => {
  const accountCounter = await getAccountCounter();
  const nextCounter = accountCounter + 1;
  await AsyncStorage.setItem(ACCOUNT_COUNTER, nextCounter.toString());
  const node = ethers.utils.HDNode.fromMnemonic(wallet.mnemonic.phrase);
  const accountPath = ethers.utils.getAccountPath(nextCounter);
  const newAccount = node.derivePath(accountPath);
  return { ...newAccount, name: `Account ${nextCounter}` };
};

const getAccountBalance = async (address: string) => {
  const balance = await sepoliaProvider.getBalance(address);
  const balanceInEth = ethers.utils.formatEther(balance);
  return balanceInEth;
};

const getAllAccounts = async (wallet: Wallet) => {
  const accountList = await getAccountList(wallet);
  const accounts = [];
  for (let account of accountList) {
    const accBalance = await getAccountBalance(account.address);
    accounts.push({ ...account, balance: parseFloat(accBalance).toFixed(5) });
  }
  return accounts;
};

export { getAccountList, createAccount, getAccountBalance, getAllAccounts };
