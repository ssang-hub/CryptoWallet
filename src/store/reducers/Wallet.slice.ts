import { createSlice } from '@reduxjs/toolkit';

const myWallet = createSlice({
  name: 'wallet',
  initialState: {
    wallet: undefined,
  },
  reducers: {
    setWallet: (state, action) => {
      // state.wallet = action.payload;
      console.log('payload', action.payload);
    },
  },
});
export const { setWallet } = myWallet.actions;
export default myWallet.reducer;
