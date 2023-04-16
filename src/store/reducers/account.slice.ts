import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'accounts',
  initialState: {
    accounts: [],
  },
  reducers: {
    setAccounts: (state, action) => {
      state.accounts = action.payload;
    },
    addAccount: (state, action) => {
      const prevState = state.accounts;
      prevState.push(action.payload);
      state.accounts = prevState;
    },
  },
});
export const { setAccounts, addAccount } = accountSlice.actions;
export default accountSlice.reducer;
