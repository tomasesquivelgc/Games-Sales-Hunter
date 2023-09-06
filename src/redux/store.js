import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export default store;
