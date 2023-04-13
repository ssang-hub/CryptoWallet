import { configureStore } from '@reduxjs/toolkit';
import WalletSlice from './reducers/Wallet.slice';
import Accounts from './reducers/account.slice';
const store = configureStore({
  reducer: {
    wallet: WalletSlice,
    accounts: Accounts,
  },
});
export default store;
