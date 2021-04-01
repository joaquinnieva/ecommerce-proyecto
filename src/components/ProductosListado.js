import React, { useState } from "react";
import { connect } from "react-redux";
import "./styles/ProductosListado.css";

function ProductosListado({
  productos,
  agregarElegido,
  categorias,
  categorizar1,
  categorizar2,
  categorizar3,
  sinCategoria,
}) {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <div className="cont-page-prod">
      {/* <div
        className={click ? "productos-categorias" : "productos-categorias-open"}
        onClick={handleClick}
      >
        <div className="categorias-titulo">
          <h2 className="categorias-titulo">Categorías</h2>
          <h2 className="categorias-titulo">+</h2>
        </div>
        <div className="categorias-lista">
          <div
            className="categorias-lista-item"
            onClick={() => sinCategoria(categorias)}
          >
            Todos
          </div>

          <div
            className="categorias-lista-item"
            onClick={() => categorizar1(categorias)}
          >
            Nike SB Dunk
          </div>
          <div
            className="categorias-lista-item"
            onClick={() => categorizar2(categorias)}
          >
            Nike Snkrs Black
          </div>
          <div
            className="categorias-lista-item"
            onClick={() => categorizar3(categorias)}
          >
            Nike Snkrs White&Blue
          </div>
        </div>
      </div> */}
      <div className="productos-lista">
        {productos.map((producto) => (
          <div className="producto-item" key={producto.name}>
            <img src={producto.image} className="item-imagen" alt="producto" />
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
  categorias: state.categorias,
});

const mapDispatchToProps = (dispatch) => ({
  agregarElegido(producto) {
    dispatch({
      type: "ELEGIDO",
      producto,
    });
  },
  categorizar1(categorias) {
    dispatch({
      type: "CATEGORIA1",
      categorias,
    });
  },
  categorizar2(categorias) {
    dispatch({
      type: "CATEGORIA2",
      categorias,
    });
  },
  categorizar3(categorias) {
    dispatch({
      type: "CATEGORIA3",
      categorias,
    });
  },
  sinCategoria(producto) {
    dispatch({
      type: "SINCATEGORIA",
      producto,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductosListado);
