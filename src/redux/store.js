import { createStore } from 'redux';
import nike1 from '../assets/img/productos/nike-sb-dunk.png';
import nike2 from '../assets/img/productos/nike-snkrs1.png';
import nike3 from '../assets/img/productos/nike-snkrs2.png';

// constantes
const initialState = {
  productos: [
    {
      id: 1,
      name: 'Nike SB Dunk',
      type: 'shoe',
      image: nike1,
      price: 1000,
      amount: 1,
    },
    {
      id: 2,
      name: 'Nike Snkrs Black',
      type: 'shoe',
      image: nike2,
      price: 2000,
      amount: 1,
    },
    {
      id: 3,
      name: 'Nike Snkrs White&Blue',
      type: 'shoe',
      image: nike3,
      price: 3000,
      amount: 1,
    },
    {
      id: 4,
      name: 'Nike SB Dunk Pro ',
      type: 'shoe',
      image: nike1,
      price: 1000,
      amount: 1,
    },
    {
      id: 5,
      name: 'Nike Snkrs Black Ultra',
      type: 'shoe',
      image: nike2,
      price: 2000,
      amount: 1,
    },
    {
      id: 6,
      name: 'Nike Snkrs WB',
      type: 'shoe',
      image: nike3,
      price: 3000,
      amount: 1,
    },
    {
      id: 7,
      name: 'Nike SB Dunkers',
      type: 'shoe',
      image: nike1,
      price: 1000,
      amount: 1,
    },
    {
      id: 8,
      name: 'Nike Snkrs Black',
      type: 'shoe',
      image: nike2,
      price: 2000,
      amount: 1,
    },
    {
      id: 9,
      name: 'Nike Snkrs White&Blue',
      type: 'shoe',
      image: nike3,
      price: 3000,
      amount: 1,
    },
    {
      id: 10,
      name: 'Nike SB Dunk',
      type: 'shoe',
      image: nike1,
      price: 1000,
      amount: 1,
    },
    {
      id: 11,
      name: 'Nike Snkrs Black',
      type: 'shoe',
      image: nike2,
      price: 2000,
      amount: 1,
    },
    {
      id: 12,
      name: 'Nike Snkrs White&Blue',
      type: 'shoe',
      image: nike3,
      price: 3000,
      amount: 1,
    },
    {
      id: 13,
      name: 'Nike SB Dunk',
      type: 'shoe',
      image: nike1,
      price: 1000,
      amount: 1,
    },
    {
      id: 14,
      name: 'Nike Snkrs Black',
      type: 'shoe',
      image: nike2,
      price: 2000,
      amount: 1,
    },
    {
      id: 15,
      name: 'Lorem ipsum',
      type: 'shoe',
      image: nike3,
      price: 3000,
      amount: 1,
    },
  ],
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
