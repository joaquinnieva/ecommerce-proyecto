import React from 'react';
import '../styles/Acordion.css';

function Acordion() {
  return (
    <div className="wrapper">
      <div className="wrap-1">
        <input className="wrapper-input" type="radio" id="tab-1" name="tabs" />
        <label className="wrapper-label" htmlFor="tab-1">
          <div>Pregunta 1</div>
          <div className="cross"></div>
        </label>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quasi inventore unde nobis
          voluptatibus illum quae rerum laudantium minima, excepturi quis maiores. Eaque quae, nam delectus explicabo,
          deserunt ipsum!
        </div>
      </div>

      <div className="wrap-2">
        <input className="wrapper-input" type="radio" id="tab-2" name="tabs" />
        <label className="wrapper-label" htmlFor="tab-2">
          <div>Pregunta 2</div>
          <div className="cross"></div>
        </label>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quasi inventore unde nobis
          voluptatibus illum quae rerum laudantium minima, excepturi quis maiores. Eaque quae, nam delectus , deserunt
          ipsum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. autem quasi inventore unde nobis voluptatibus
          illum quae rerum laudantium minima, excepturi quis maiores. Eaque quae, nam delectus explicabo, ipsum!
        </div>
      </div>

      <div className="wrap-3">
        <input className="wrapper-input" type="radio" id="tab-3" name="tabs" />
        <label className="wrapper-label" htmlFor="tab-3">
          <div>Pregunta 3</div>
          <div className="cross"></div>
        </label>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quasi inventore unde nobis
          voluptatibus illum quae rerum laudantium minima, excepturi quis maiores. Eaque quae, nam delectus , deserunt
          ipsum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. autem quasi inventore unde nobis voluptatibus
          illum quae rerum laudantium minima, excepturi quis maiores. Eaque quae, nam delectus explicabo, ipsum!
        </div>
      </div>
    </div>
  );
}

export default Acordion;
