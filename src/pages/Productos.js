import { connect } from "react-redux";
import "../components/styles/Productos.css";
import noDuplicado from "../functions/noDuplicado";

function Productos({ productos, agregarAlCarrito, carrito, sumarProducto }) {
  const mandarAlCarrito = (producto) => {
    const productoNoDuplicado = noDuplicado(carrito, producto);
    if (productoNoDuplicado) {
      agregarAlCarrito(producto);
    }
    const inCart = carrito.find((productos) => productos.id === producto.id);
    if (!productoNoDuplicado) {
      if (inCart.amount < 10) {
        sumarProducto(producto);
      }
    }
  };

  return (
    <div className="cont-page-prod">
      <div className="productos-lista">
        {productos.map((producto) => (
          <div className="producto-item" key={producto.name}>
            <img src={producto.image} className="item-imagen" alt="producto" />
            <div className="item-name"> {producto.name} </div>
            <div className="item-price">$ {producto.price} </div>
            <button className="item-carrito" onClick={() => mandarAlCarrito(producto)}>
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
  carrito: state.carrito,
});

const mapDispatchToProps = (dispatch) => ({
  agregarAlCarrito(producto) {
    dispatch({
      type: "ELEGIDO",
      producto,
    });
  },
  sumarProducto(producto) {
    dispatch({
      type: "SUMARPRODUCTO",
      producto,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Productos);
