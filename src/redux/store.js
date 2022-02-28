import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import productsSlice from './slice/productsSlice';

export default configureStore({
  reducer: {
    products: cartSlice,
    shop: productsSlice,
  },
});
