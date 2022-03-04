import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Images from '../components/Images';
import { CART_BUTTON, CART_MSG, CART_TITLE, CART_TOTAL } from '../data/constants';
import obtenerTotal from '../functions/obtenerTotal';
import { borrarDelCarrito, restarCantidad, sumarCantidad } from '../redux/slice/cartSlice';
import '../styles/Carrito.css';

function Carrito() {
  const carrito = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const quitarDelCarrito = (producto) => {
    dispatch(borrarDelCarrito(producto));
  };
  const sumarProducto = (producto) => {
    const inCart = carrito.find((productos) => productos.id === producto.id);
    if (inCart.amount < 10) {
      dispatch(sumarCantidad(producto));
    }
  };
  const restarProducto = (producto) => {
    const inCart = carrito.find((productos) => productos.id === producto.id);
    if (inCart.amount > 1) {
      dispatch(restarCantidad(producto));
    }
  };
  const comprar = () => {
    alert('No es un ecommerce de verdad');
  };
  return (
    <div className="cont-page">
      <div className="cont-carrito">
        <h2 className="carrito-titulo">{CART_TITLE}</h2>
        {carrito.length === 0 ? (
          <p>{CART_MSG}</p>
        ) : (
          carrito.map((producto) => (
            <div className="carrito-item" key={producto.id}>
              <div className="carrito-info">
                <img src={producto.image} className="carrito-img" alt="icon" />
                <Link to={'/product/' + producto.id} className="carrito-name">
                  {producto.title}
                </Link>
              </div>

              <div className="carrito-details">
                <div className="carrito-amount">
                  <button
                    className="carrito-amount-boton"
                    onClick={() => {
                      sumarProducto(producto);
                    }}
                  >
                    +
                  </button>
                  <p className="carrito-amount-number">{producto.amount}</p>
                  <button
                    className="carrito-amount-boton"
                    onClick={() => {
                      restarProducto(producto);
                    }}
                  >
                    -
                  </button>
                </div>
                <div className="carrito-price"> $ {(producto.price * producto.amount).toFixed(2)} </div>
                <button
                  className="carrito-borrar"
                  onClick={() => {
                    quitarDelCarrito(producto);
                  }}
                >
                  <img src={Images.basura} alt="icon" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="carrito-total">
        <div className="carrito-total-text">
          <h2>{CART_TOTAL}</h2>
          <h2>${obtenerTotal(carrito).toFixed(2)}</h2>
        </div>
        <div className="carrito-comprar">
          <button onClick={comprar} className="carrito-comprar-text">
            {CART_BUTTON}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
