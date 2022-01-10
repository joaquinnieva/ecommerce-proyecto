import React from 'react';
import Slider from '../components/Slider';
import slidesImages from '../data/slidesImages';
import '../styles/Inicio.css';

function Inicio() {
  return (
    <div className="cont-page">
      <Slider slides={slidesImages} />
    </div>
  );
}

export default Inicio;
