import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';

const store = configureStore({
  reducer: {
    deals: homeReducer,
  },
});

export default store;
