import React from "react";
import CarritoIcon from "./CarritoIcon";
import Images from "./Images";
import "./styles/NavbarTop.css";

function NavbarTop() {
  return (
    <>
      <div className="cont-logoecommerce">
        <a href="#/">
          <img className="logoecommerce1" src={Images.logoecommerce1} />
          <img className="logoecommerce2" src={Images.logoecommerce2} />
        </a>
      </div>
      <div className="navbartop">
        <div className="framefix"></div>

        <div className="buscador">
          <div className="buscador-ico-cont">
            <img className="buscador-ico" src={Images.buscador} />
            <input placeholder="Buscar" type="text" className="buscar-input"></input>
          </div>
        </div>

        <div className="carrito">
          <CarritoIcon />
        </div>
      </div>
    </>
  );
}

export default NavbarTop;
