import { createStore } from 'redux';

// constantes
const initialState = {
  carrito: [],
};

// reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ELEGIDO':
      return {
        ...state,
        carrito: state.carrito.concat(action.producto),
      };

    case 'BORRADO':
      return {
        ...state,
        carrito: state.carrito.filter((producto) => producto.id !== action.producto.id),
      };

    case 'SUMARPRODUCTO':
      return {
        ...state,
        carrito: state.carrito.map((producto) =>
          producto.id === action.producto.id ? { ...producto, amount: producto.amount + 1 } : { ...producto }
        ),
      };
    case 'RESTARPRODUCTO':
      return {
        ...state,
        carrito: state.carrito.map((producto) =>
          producto.id === action.producto.id ? { ...producto, amount: producto.amount - 1 } : { ...producto }
        ),
      };

    default:
      return state;
  }
};
// store
export default createStore(productReducer);
