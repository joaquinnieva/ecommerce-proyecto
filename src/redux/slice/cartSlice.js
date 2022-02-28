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
    sumarCantidad: (state, action) => {
      state.cart = state.cart.map((producto) =>
        producto.id === action.payload.id ? { ...producto, amount: producto.amount + 1 } : { ...producto }
      );
    },
    restarCantidad: (state, action) => {
      state.cart = state.cart.map((producto) =>
        producto.id === action.payload.id ? { ...producto, amount: producto.amount - 1 } : { ...producto }
      );
    },
  },
});

export const { agregarAlCarrito, borrarDelCarrito, sumarCantidad, restarCantidad } = cartSlice.actions;

export default cartSlice.reducer;
