/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader';
import noDuplicado from '../functions/noDuplicado';
import { agregarAlCarrito } from '../redux/slice/cartSlice';
import '../styles/ProductoDetalle.css';

function ProductoDetalle() {
  const productos = useSelector((state) => state.shop.products);
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const carrito = useSelector((state) => state.products.cart);
  const notifyOK = () => toast.success('Agregado al carrito!');
  const notifyNO = () => toast.info('Este item ya está agregado');
  const producto = productos?.filter((item) => item.id == id);

  const mandarAlCarrito = (producto) => {
    const productoNoDuplicado = noDuplicado(carrito, producto);
    if (productoNoDuplicado) {
      notifyOK();
      dispatch(agregarAlCarrito(producto));
    } else {
      notifyNO();
    }
  };

  useEffect(() => {
    if (!productos) {
      history.push('/home');
    }
  }, [producto]);
  return (
    <main className="cont-page container">
      <Link to="/products" className="back-shop">
        ◀
      </Link>
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
        producto.map((item, index) => (
          <React.Fragment key={index}>
            <div className="left-column">
              <img src={item.image} alt="product" className="left-img" />
            </div>
            <div className="right-column">
              <div className="product-description">
                <span>{item.category}</span>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>

              <div className="product-price">
                <span>${item.price}</span>
                <button
                  onClick={() => {
                    mandarAlCarrito({ ...item, amount: 1 });
                  }}
                  className="cart-btn"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </React.Fragment>
        ))
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default ProductoDetalle;
