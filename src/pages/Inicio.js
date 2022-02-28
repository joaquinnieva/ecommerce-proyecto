import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logoecommerce2.png';
import Slider from '../components/Slider';
import slidesImages from '../data/slidesImages';
import '../styles/Inicio.css';

function Inicio() {
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
      <Slider slides={slidesImages} />
    </div>
  );
}

export default Inicio;
