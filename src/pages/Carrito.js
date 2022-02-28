import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Images from '../components/Images';
import { borrarDelCarrito } from '../redux/slice/cartSlice';
import '../styles/Carrito.css';

function Carrito() {
  const carrito = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const quitarDelCarrito = (producto) => {
    dispatch(borrarDelCarrito(producto));
  };
  const comprar = () => {
    alert('No es un ecommerce de verdad');
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
                <div className="carrito-name"> {producto.title} </div>
                <div className="carrito-price"> $ {producto.price * producto.amount} </div>
              </div>

              <div className="carrito-details">
                <div className="carrito-fix"></div>
                <div className="carrito-amount">
                  <button className="carrito-amount-boton" onClick={() => {}}>
                    +
                  </button>
                  <p className="carrito-amount-number">{producto.amount}</p>
                  <button className="carrito-amount-boton" onClick={() => {}}>
                    -
                  </button>
                </div>

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
          <h2>Total</h2>
          <h2>$ asd</h2>
        </div>
        <div className="carrito-comprar">
          <button onClick={comprar} className="carrito-comprar-text">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
