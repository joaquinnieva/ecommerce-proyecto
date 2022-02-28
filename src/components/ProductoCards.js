import React from 'react';
import { Link } from 'react-router-dom';

function ProductoCards({ producto }) {
  return (
    <div className="producto" key={producto.id}>
      <Link to={'/product/' + producto.id} className="producto-header" href="/">
        <img alt="ecommerce" className="producto-img" src={producto.image} />
      </Link>
      <div className="producto-textos">
        <div className="producto-categoria">{producto.category.toUpperCase()}</div>
        <div className="producto-title">
          <Link to={'/product/' + producto.id}>{producto.title}</Link>
        </div>
        <p className="producto-precio">${producto.price}</p>
      </div>
    </div>
  );
}

export default ProductoCards;
