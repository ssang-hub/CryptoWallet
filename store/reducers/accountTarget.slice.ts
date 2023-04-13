import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'accounts',
  initialState: {
    acc: {},
  },
  reducers: {
    setTarget: (state, action) => {
      state.acc = action.payload;
    },
  },
});
export const { setTarget } = accountSlice.actions;
export default accountSlice.reducer;
