import 'react-native-get-random-values';
import '@ethersproject/shims';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Wallet, ethers } from 'ethers';
import { ACCOUNT_COUNTER, CURRENT_WALLET } from '../constants/storage';

const newWallet = async (password: string) => {
  const wallet = ethers.Wallet.createRandom();
  const walletJson = await wallet.encrypt(password, {
    scrypt: {
      N: 64,
    },
  });
  console.log(walletJson);

  await AsyncStorage.setItem(ACCOUNT_COUNTER, '1');
  await AsyncStorage.setItem(CURRENT_WALLET, walletJson);
};

const checkIfExistingWallet = async () => {
  const wallet = await AsyncStorage.getItem(CURRENT_WALLET);
  return wallet !== null;
};

// For login feature
const unlockWallet = async (
  password: string,
): Promise<
  | {
      status: 'success';
      wallet: Wallet;
    }
  | {
      status: 'fail';
    }
> => {
  try {
    const walletJson = await AsyncStorage.getItem(CURRENT_WALLET);
    const wallet = await ethers.Wallet.fromEncryptedJson(walletJson, password);
    return {
      status: 'success',
      wallet,
    };
  } catch (e) {
    // console.error(e);
    return {
      status: 'fail',
    };
  }
};

export { newWallet, checkIfExistingWallet, unlockWallet };
