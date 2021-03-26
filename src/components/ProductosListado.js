import React from "react";
import { connect } from "react-redux";
import "./styles/ProductosListado.css";

function ProductosListado({productos, agregarElegido}) {
  return (
    <div className="cont-page-prod">
      <div className="listaproductos">
        
      { productos.map(producto => (
      <div className="productos-item" key={producto.id}>
            <img src={producto.image} className="item-img" />
            <div className="item-name"> {producto.name} </div>
            <div className="item-price"> {producto.price} </div>
            <button className="item-carrito" onClick={() => agregarElegido(producto)}> Agregar al carrito </button>
          </div>))
       }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  productos: state.productos
})

const mapDispatchToProps = dispatch => ({
  agregarElegido(producto){
    dispatch({
      type: "ELEGIDO",
      producto
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductosListado);
