import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    agregarAlCarrito: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    borrarDelCarrito: (state, action) => {
      state.cart = state.cart.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { agregarAlCarrito, borrarDelCarrito } = cartSlice.actions;

export default cartSlice.reducer;
