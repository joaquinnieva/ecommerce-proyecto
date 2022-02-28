import React from 'react';
import { SPONSORS_DESC, SPONSORS_SUB, SPONSORS_TITLE } from '../data/constants';
import { sponsors } from '../data/sponsorsImages';
import '../styles/MarcasSponsor.css';

function MarcasSponsor() {
  return (
    <div className="cont-page">
      <div className="about-section">
        <h1>{SPONSORS_TITLE}</h1>
        <p>{SPONSORS_SUB}</p>
        <p>{SPONSORS_DESC}</p>
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
