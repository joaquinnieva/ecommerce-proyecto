import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Loader from '../components/Loader';
import { getProducts } from '../functions/apiServices';
import '../styles/ProductoDetalle.css';

function ProductoDetalle() {
  const [cargando, setCargando] = useState(false);
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  const effProducts = async () => {
    setCargando(true);
    const res = await getProducts(id);
    if (res) {
      setProducto(res);
      setCargando(false);
    }
  };

  useEffect(() => {
    effProducts();
  }, []);

  return (
    <main class="cont-page container">
      {cargando && <Loader />}
      {producto && (
        <>
          <div class="left-column">
            <img src={producto.image} alt="" />
          </div>
          <div class="right-column">
            <div class="product-description">
              <span>{producto.category}</span>
              <h1>{producto.title}</h1>
              <p>{producto.description}</p>
            </div>

            <div class="product-price">
              <span>${producto.price}</span>
              <a href="#" class="cart-btn">
                Add to cart
              </a>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default ProductoDetalle;
