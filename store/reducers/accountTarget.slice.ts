import { createSlice } from '@reduxjs/toolkit';

const AccountTargetSlice = createSlice({
  name: 'accountTarget',
  initialState: {
    acc: {},
  },
  reducers: {
    setTarget: (state, action) => {
      state.acc = action.payload;
    },
  },
});
export const { setTarget } = AccountTargetSlice.actions;
export default AccountTargetSlice.reducer;
