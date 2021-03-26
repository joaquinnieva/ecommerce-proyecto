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
      price: "$1000",
    },
    {
      id: "2",
      name: "Nike Snkrs Black",
      type: "shoe",
      image: nike2,
      price: "$2000",
    },
    {
      id: "3",
      name: "Nike Snkrs White&Blue",
      type: "shoe",
      image: nike3,
      price: "$3000",
    },
    {
      id: "4",
      name: "Nike SB Dunk",
      type: "shoe",
      image: nike1,
      price: "$4000",
    },
    {
      id: "5",
      name: "Nike Snkrs Black",
      type: "shoe",
      image: nike2,
      price: "$5000",
    },
    {
      id: "6",
      name: "Nike Snkrs White&Blue",
      type: "shoe",
      image: nike3,
      price: "$6000",
    },
  ],
  elegidos: [],
};

// types

// reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ELEGIDO":
      return {
        ...state,
        elegidos: state.elegidos.concat(action.producto),
      };

    case "BORRADO":
      return {
        ...state,
        elegidos: state.elegidos.filter(
          (producto) => producto.id !== action.producto.id
        ),
      };

    default:
      return state;
  }
};

// acciones

// store
export default createStore(productReducer);
