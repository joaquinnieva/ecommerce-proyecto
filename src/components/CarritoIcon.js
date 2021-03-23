import React from "react";
import "./styles/CarritoIcon.css";
import Images from "./Images";

function CarritoIcon() {

  return (
    <>
      <a href="#/carrito">
        <div className="carrito-numero">1</div>
        <img className="carritocompras" src={Images.carrito} />
      </a>
    </>
  );
}

export default CarritoIcon;
