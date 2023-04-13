import { createSlice } from '@reduxjs/toolkit';

const myWallet = createSlice({
  name: 'wallet',
  initialState: {
    wallet: {},
  },
  reducers: {
    setWallet: (state, action) => {
      state.wallet = action.payload;
    },
  },
});
export const { setWallet } = myWallet.actions;
export default myWallet.reducer;
