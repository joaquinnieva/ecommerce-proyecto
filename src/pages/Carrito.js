import React from "react";
import { connect } from "react-redux";
import Images from "../components/Images";
import "../components/styles/Carrito.css";

function Carrito({ carrito, borrarElegido, sumarProducto, restarProducto }) {
  const sumar = (producto) => {
    const inCart = carrito.find((productos) => productos.id === producto.id);
    if (inCart.amount < 10) {
      sumarProducto(producto);
    }
  };
  const restar = (producto) => {
    const inCart = carrito.find((productos) => productos.id === producto.id);
    if (inCart.amount > 1) {
      restarProducto(producto);
    }
  };

  return (
    <div className="cont-page">
      <div className="cont-carrito">
        <h2 className="carrito-titulo">Carrito</h2>
        {carrito.length === 0 ? (
          <p>No hay nada por aquí...</p>
        ) : (
          carrito.map((producto) => (
            <div className="carrito-item" key={producto.id}>
              <div className="carrito-info">
                <img src={producto.image} className="carrito-img" alt="icon" />
                <div className="carrito-name"> {producto.name} </div>
                <div className="carrito-price"> $ {producto.price * producto.amount} </div>
              </div>

              <div className="carrito-details" >
                <div className="carrito-fix"></div>
                <div className="carrito-amount">
                  <button className="carrito-amount-boton" onClick={() => sumar(producto)}>
                    +
                  </button>
                  <p className="carrito-amount-number">{producto.amount}</p>
                  <button className="carrito-amount-boton" onClick={() => restar(producto)}>
                    -
                  </button>
                </div>

                <button className="carrito-borrar" onClick={() => borrarElegido(producto)}>
                  <img src={Images.basura} alt="icon" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  carrito: state.carrito,
});

const mapDispatchToProps = (dispatch) => ({
  borrarElegido(producto) {
    dispatch({
      type: "BORRADO",
      producto,
    });
  },
  sumarProducto(producto) {
    dispatch({
      type: "SUMARPRODUCTO",
      producto,
    });
  },
  restarProducto(producto) {
    dispatch({
      type: "RESTARPRODUCTO",
      producto,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Carrito);