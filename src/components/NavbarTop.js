import React from "react";
import CarritoIcon from "./CarritoIcon";
import Images from "./Images";
import "./styles/NavbarTop.css";
import { connect } from "react-redux";

function NavbarTop({busqueda, productos}) {
  const handleChange= e =>{
    busqueda= e.target.value
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
              onChange={handleChange}
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


const mapStateToProps = (state) => ({
  productos: state.productos,
  busqueda: state.busqueda,
});

const mapDispatchToProps = (dispatch) => ({

    });

export default connect(mapStateToProps, mapDispatchToProps)(NavbarTop);
