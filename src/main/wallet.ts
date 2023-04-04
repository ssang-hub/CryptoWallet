import 'react-native-get-random-values';
import '@ethersproject/shims';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ethers } from 'ethers';
import { CURRENT_WALLET } from '../constants/storage';

const newWallet = async (password: string) => {
  const wallet = ethers.Wallet.createRandom();
  const walletJson = await wallet.encrypt(password, {
    scrypt: {
      N: 64,
    },
  });
  AsyncStorage.setItem(CURRENT_WALLET, walletJson);
};

const checkIfExistingWallet = async () => {
  const wallet = await AsyncStorage.getItem(CURRENT_WALLET);
  return wallet !== null;
};

// For login feature
const unlockWallet = async (password: string): Promise<'success' | 'fail'> => {
  try {
    const walletJson = await AsyncStorage.getItem(CURRENT_WALLET);
    await ethers.Wallet.fromEncryptedJson(walletJson, password);
    return 'success';
  } catch (e) {
    console.error(e);
    return 'fail';
  }
};

export { newWallet, checkIfExistingWallet, unlockWallet };
