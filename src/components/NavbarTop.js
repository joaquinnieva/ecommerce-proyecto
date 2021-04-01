import React from "react";
import CarritoIcon from "./CarritoIcon";
import Images from "./Images";
import "./styles/NavbarTop.css";

function NavbarTop() {

  const handleCategory = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <div className="cont-logoecommerce">
        <a href="#/">
          <img className="logoecommerce1" src={Images.logoecommerce1} alt="logo"/>
          <img className="logoecommerce2" src={Images.logoecommerce2} alt="logo"/>
        </a>
      </div>
      <div className="navbartop">
        <div className="framefix"></div>

        <div className="buscador">
          <div className="buscador-ico-cont">
            <img className="buscador-ico" src={Images.buscador} alt="buscador" />
            <input
              placeholder="Buscar"
              type="text"
              className="buscar-input"
              onChange={handleCategory}
            ></input>
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
