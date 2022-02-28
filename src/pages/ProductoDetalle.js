import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader';
import { getProducts } from '../functions/apiServices';
import noDuplicado from '../functions/noDuplicado';
import { agregarAlCarrito } from '../redux/slice/cartSlice';
import '../styles/ProductoDetalle.css';

function ProductoDetalle() {
  const [producto, setProducto] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.products.cart);
  const notify = () => toast.success('Agregado al carrito!');
  const effProducts = async () => {
    const res = await getProducts(id);
    if (res) {
      setProducto(res);
    }
  };
  const mandarAlCarrito = (producto) => {
    const productoNoDuplicado = noDuplicado(carrito, producto);
    if (productoNoDuplicado) {
      notify();
      dispatch(agregarAlCarrito(producto));
    }
  };

  useEffect(() => {
    effProducts();
  });

  return (
    <main className="cont-page container">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: '#313131' }}
      />
      {producto ? (
        <>
          <div className="left-column">
            <img src={producto.image} alt="product" className="left-img" />
          </div>
          <div className="right-column">
            <div className="product-description">
              <span>{producto.category}</span>
              <h1>{producto.title}</h1>
              <p>{producto.description}</p>
            </div>

            <div className="product-price">
              <span>${producto.price}</span>
              <button
                onClick={() => {
                  mandarAlCarrito({ ...producto, amount: 1 });
                }}
                className="cart-btn"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default ProductoDetalle;
