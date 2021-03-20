import React from "react";
import Carrito from "./Carrito";
import Images from "./Images";
import "./styles/NavbarTop.css";

function NavbarTop() {
  return (
    <>
      <div className="cont-logoecommerce">
        <a href="#/">
          <img className="logoecommerce" src={Images.logoecommerce} />
        </a>
      </div>
      <div className="navbartop">
        <div className="framefix"></div>

        <div className="buscador">
          <div className="buscador-ico-cont">
            <img className="buscador-ico" src={Images.buscador} />
          </div>
        </div>

        <div className="carrito">
          <Carrito />
        </div>
      </div>
    </>
  );
}

export default NavbarTop;
