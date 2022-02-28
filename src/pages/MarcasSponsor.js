import React from 'react';
import { sponsors } from '../data/sponsorsImages';
import '../styles/MarcasSponsor.css';

function MarcasSponsor() {
  return (
    <div className="cont-page">
      <div className="about-section">
        <h1>Patrocinadores</h1>
        <p>Estos son nuestros patrocinadores.</p>
        <p>Estas marcas hacen posible nuestro comercio y ademas son socios del mismo.</p>
      </div>
      <div className="cardmarcas-cont">
        {sponsors.map((card, index) => (
          <div className="card" key={index}>
            <img className="card-img" src={card.image} alt="marca" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default MarcasSponsor;
