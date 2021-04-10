import { createStore } from "redux";
import nike1 from "../img/productos/nike-sb-dunk.png";
import nike2 from "../img/productos/nike-snkrs1.png";
import nike3 from "../img/productos/nike-snkrs2.png";

// constantes
const initialState = {
  productos: [
    {
      id: "1",
      name: "Nike SB Dunk",
      type: "shoe",
      image: nike1,
      price: 1000,
      amount: 1
    },
    {
      id: "2",
      name: "Nike Snkrs Black",
      type: "shoe",
      image: nike2,
      price: 2000,
      amount: 1
    },
    {
      id: "3",
      name: "Nike Snkrs White&Blue",
      type: "shoe",
      image: nike3,
      price: 3000,
      amount: 1
    }
  ],
  elegidos: [],
  busqueda:[],
};

// types

// reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ELEGIDO":
      return {
        ...state,
        elegidos: state.elegidos.concat(action.producto),
        productos: state.productos.filter(
          (producto) => producto.name !== action.producto.name
        ),
        categorias: state.productos.filter(
          (producto) => producto.name !== action.producto.name
        ),
      };

    case "BORRADO":
      return {
        ...state,
        elegidos: state.elegidos.filter(
          (producto) => producto.name !== action.producto.name
        ),
        productos: state.productos.concat(action.producto),
        categorias: state.productos.concat(action.producto),
      };

    default:
      return state;
  }
};

// acciones

// store
export default createStore(productReducer);
