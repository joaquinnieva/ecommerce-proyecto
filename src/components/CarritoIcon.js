import React from "react";
import { connect } from "react-redux";
import "./styles/CarritoIcon.css";
import Images from "./Images";

function CarritoIcon({elegidos}) {

  return (
    <>
      <a href="#/carrito">
        <div className="carrito-numero">{elegidos.length}</div>
        <img className="carritocompras" src={Images.carrito} />
      </a>
    </>
  );
}

const mapStateToProps = state => ({
  elegidos: state.elegidos
})

export default connect(mapStateToProps, {})(CarritoIcon);
