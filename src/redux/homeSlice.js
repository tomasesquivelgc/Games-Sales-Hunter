import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: [],
  reducers: {
    setDeals: (state, action) => action.payload,
  },
});

export const { setDeals } = homeSlice.actions;
export default homeSlice.reducer;
