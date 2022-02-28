import React from 'react';
import { FAQ_1, FAQ_1_TITLE, FAQ_2, FAQ_2_TITLE, FAQ_3, FAQ_3_TITLE } from '../data/constants';
import '../styles/Acordion.css';

function Acordion() {
  return (
    <div className="wrapper">
      <div className="wrap-1">
        <input className="wrapper-input" type="radio" id="tab-1" name="tabs" />
        <label className="wrapper-label" htmlFor="tab-1">
          <div>{FAQ_1_TITLE}</div>
          <div className="cross"></div>
        </label>
        <div className="content">{FAQ_1}</div>
      </div>

      <div className="wrap-2">
        <input className="wrapper-input" type="radio" id="tab-2" name="tabs" />
        <label className="wrapper-label" htmlFor="tab-2">
          <div>{FAQ_2_TITLE}</div>
          <div className="cross"></div>
        </label>
        <div className="content">{FAQ_2}</div>
      </div>

      <div className="wrap-3">
        <input className="wrapper-input" type="radio" id="tab-3" name="tabs" />
        <label className="wrapper-label" htmlFor="tab-3">
          <div>{FAQ_3_TITLE}</div>
          <div className="cross"></div>
        </label>
        <div className="content">{FAQ_3}</div>
      </div>
    </div>
  );
}

export default Acordion;
