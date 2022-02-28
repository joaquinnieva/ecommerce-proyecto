import React from 'react';
import Acordion from '../components/Acordion';
import { FAQ_TITLE } from '../data/constants';
import '../styles/Ayuda.css';

function Ayuda() {
  return (
    <>
      <div className="cont-page">
        <div className="cont-texto-ayuda">
          <div className="ayuda-titulo">
            <h2>• {FAQ_TITLE}</h2>
          </div>
          <Acordion></Acordion>
        </div>
      </div>
    </>
  );
}

export default Ayuda;
