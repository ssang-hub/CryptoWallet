import { createSlice } from '@reduxjs/toolkit';

const AccountTargetSlice = createSlice({
  name: 'accountTarget',
  initialState: {
    // exmaple: acc: {"address": "0xeC17fC93eC91cDCdABf7A9a6F8c13c22a1A099B2", "name": "Account 1", "privateKey": "0xa9f65576423891544c30a09625e36c4079d540532692b85290e3ac5f9f496d"}
    acc: {},
  },
  reducers: {
    setTarget: (state, action) => {
      action.payload = { ...action.payload, balance: parseFloat(action.payload.balance).toFixed(5) };
      state.acc = action.payload;
    },
    updateBalance: (state, action) => {
      state.acc = action.payload;
    },
  },
});
export const { setTarget } = AccountTargetSlice.actions;
export default AccountTargetSlice.reducer;
