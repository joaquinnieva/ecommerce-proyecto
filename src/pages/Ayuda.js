import React from 'react';
import Acordion from '../components/Acordion';
import '../styles/Ayuda.css';

function Ayuda() {
  return (
    <>
      <div className="cont-page">
        <div className="cont-texto-ayuda">
          <div className="ayuda-titulo">
            <h2>• Preguntas frecuentes</h2>
          </div>
          <Acordion></Acordion>
        </div>
      </div>
    </>
  );
}

export default Ayuda;
