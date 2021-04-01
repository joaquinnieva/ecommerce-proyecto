import React from "react";
import { connect } from "react-redux";
import Images from "./Images";
import "./styles/CarritoItems.css";

function CarritoItems({ elegidos, borrarElegido }) {
  return (
    <div className="cont-page">
      <div className="cont-carrito">
        <h2 className="carrito-titulo">Carrito</h2>
        {elegidos.map((producto) => (
          <div className="carrito-item" key={producto.id}>
            <div className="carrito-info">
              <img src={producto.image} className="carrito-img" alt="icon" />
              <div className="carrito-name"> {producto.name} </div>
              <div className="carrito-price"> {producto.price} </div>
            </div>
            <button
              className="carrito-borrar"
              onClick={() => borrarElegido(producto)}
            >
              <img src={Images.basura} alt="icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  elegidos: state.elegidos,
});

const mapDispatchToProps = (dispatch) => ({
  borrarElegido(producto) {
    dispatch({
      type: "BORRADO",
      producto,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CarritoItems);
