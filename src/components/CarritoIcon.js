import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import sumarProductos from '../functions/sumarProductos';
import '../styles/CarritoIcon.css';
import Images from './Images';

function CarritoIcon() {
  const carrito = useSelector((state) => state.products.cart);
  const sumando = sumarProductos(carrito);

  return (
    <>
      <Link className="carrito-cont" to="/cart">
        <div className="carrito-numero">{sumando}</div>
        <img className="carritocompras" src={Images.carrito} alt="carrito" />
      </Link>
    </>
  );
}

export default CarritoIcon;
