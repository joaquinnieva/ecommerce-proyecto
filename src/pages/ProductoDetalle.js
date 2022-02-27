import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
  });

  return (
    <main className="cont-page container">
      {cargando && <Loader />}
      {producto && (
        <>
          <div className="left-column">
            <img src={producto.image} alt="" />
          </div>
          <div className="right-column">
            <div className="product-description">
              <span>{producto.category}</span>
              <h1>{producto.title}</h1>
              <p>{producto.description}</p>
            </div>

            <div className="product-price">
              <span>${producto.price}</span>
              <Link href="/cart" className="cart-btn">
                Add to cart
              </Link>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default ProductoDetalle;
