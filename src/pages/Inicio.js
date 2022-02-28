/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logoecommerce2.png';
import Slider from '../components/Slider';
import { BRAND, LANDING_BRAND, LANDING_BUTTON } from '../data/constants';
import { getProducts } from '../functions/apiServices';
import { setProducts } from '../redux/slice/productsSlice';
import '../styles/Inicio.css';

function Inicio() {
  const productos = useSelector((state) => state.shop.products);
  const dispatch = useDispatch();
  const obtenerProductos = async () => {
    const res = await getProducts();
    if (res) {
      dispatch(setProducts(res));
    }
  };
  useEffect(() => {
    if (!productos) {
      obtenerProductos();
    }
  }, []);
  return (
    <div className="cont-page">
      <div className="home-landing">
        <div className="landing-left">
          <img src={logo} alt="" />
        </div>
        <div className="landing-right">
          <h1>{BRAND}</h1>
          <p>{LANDING_BRAND}</p>
          <Link to="/products" className="landing-btn">
            {LANDING_BUTTON}
          </Link>
        </div>
      </div>
      <Slider slides={productos} />
    </div>
  );
}

export default Inicio;
