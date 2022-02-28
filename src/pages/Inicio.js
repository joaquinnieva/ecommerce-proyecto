import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logoecommerce2.png';
import Slider from '../components/Slider';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="cont-page">
      <div className="home-landing">
        <div className="landing-left">
          <img src={logo} alt="" />
        </div>
        <div className="landing-right">
          <h1>ecommerce</h1>
          <p>Tu tienda online mas conveniente</p>
          <Link to="/products" className="landing-btn">
            Explorar
          </Link>
        </div>
      </div>
      <Slider slides={productos} />
    </div>
  );
}

export default Inicio;
