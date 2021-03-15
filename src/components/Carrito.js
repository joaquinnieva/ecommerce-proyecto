import React from "react";
import './styles/Carrito.css';
import Images from './Images';

function Carrito() {
  return (
    <>
        <img className="carritocompras" src={Images.carrito} />
    </>
  );
}

export default Carrito;
