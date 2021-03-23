import React, { useState } from "react";
import Context from "./Context";

const ProductosContext = (props) => {
  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    setNumero(numero + 1);
  };

  return (
    <Context.Provider
      value={{
        setNumero,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ProductosContext;
