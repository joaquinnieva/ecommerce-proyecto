import React from "react";
import { connect } from "react-redux";
import "./styles/CarritoIcon.css";
import Images from "./Images";
import sumarProductos from "../functions/sumarProductos";
import { Link } from "react-router-dom";

function CarritoIcon({ carrito }) {
  const sumando = sumarProductos(carrito);

  return (
    <>
      <Link to="/carrito">
        <div className="carrito-numero">{sumando}</div>
        <img className="carritocompras" src={Images.carrito} alt="carrito" />
      </Link>
    </>
  );
}

const mapStateToProps = (state) => ({
  carrito: state.carrito,
});

export default connect(mapStateToProps, {})(CarritoIcon);
