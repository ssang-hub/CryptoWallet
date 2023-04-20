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
  },
});
export const { setAccounts } = accountSlice.actions;
export default accountSlice.reducer;
