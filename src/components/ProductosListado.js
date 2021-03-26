import React, { useState } from "react";
import { connect } from "react-redux";
import "./styles/ProductosListado.css";

function ProductosListado({ productos, agregarElegido }) {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <div className="cont-page-prod">
      <div
        className={click ? "productos-categorias" : "productos-categorias-open"}
        onClick={handleClick}
      >
        <div className="categorias-titulo">
          <h2 className="categorias-titulo">Categorías</h2>
          <h2 className="categorias-titulo">+</h2>
        </div>
        <div className="categorias-lista">
          <div className="categorias-lista-item">SB</div>
          <div className="categorias-lista-item">Snkrs</div>
        </div>
      </div>
      <div className="productos-lista">
        {productos.map((producto) => (
          <div className="producto-item" key={producto.id}>
            <img src={producto.image} className="item-imagen" />
            <div className="item-name"> {producto.name} </div>
            <div className="item-price"> {producto.price} </div>
            <button
              className="item-carrito"
              onClick={() => agregarElegido(producto)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productos: state.productos,
});

const mapDispatchToProps = (dispatch) => ({
  agregarElegido(producto) {
    dispatch({
      type: "ELEGIDO",
      producto,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductosListado);
