import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Loader from '../components/Loader';
import { getProducts } from '../functions/apiServices';
import '../styles/ProductoDetalle.css';

function ProductoDetalle() {
  const [producto, setProducto] = useState(false);
  const { id } = useParams();
  const effProducts = async () => {
    const res = await getProducts(id);
    if (res) {
      setProducto(res);
    }
  };

  useEffect(() => {
    effProducts();
  });

  return (
    <main className="cont-page container">
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
              <Link href="/cart" className="cart-btn">
                Add to cart
              </Link>
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
