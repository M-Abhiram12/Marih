import {configureStore} from '@reduxjs/toolkit';
import {navReducer } from './slices/NavSlice';

 export const Store = configureStore({
  reducer:{
    Nav:navReducer
  }
});
