import { configureStore } from '@reduxjs/toolkit';
import WalletSlice from './reducers/Wallet.slice';
import Accounts from './reducers/account.slice';
import accountTargetSlice from './reducers/accountTarget.slice';
const store = configureStore({
  reducer: {
    wallet: WalletSlice,
    accounts: Accounts,
    account: accountTargetSlice,
  },
});
export default store;
