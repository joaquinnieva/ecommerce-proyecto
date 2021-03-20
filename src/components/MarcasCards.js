import React from "react";
import Images from "./Images";
import "./styles/MarcasCards.css";

function MarcasCards() {
  return (
    <div className="cont-page">
      <div className="cardmarcas-cont">
        <div className="card marcas1">
          <img className="card-img" src={Images.nike} />
        </div>
        <div className="card marcas2">
          <img className="card-img" src={Images.adidas} />
        </div>
        <div className="card marcas3">
          <img className="card-img" src={Images.vans} />
        </div>
        <div className="card marcas4">
          <img className="card-img" src={Images.reebok} />
        </div>
        <div className="card marcas5">
          <img className="card-img" src={Images.puma} />
        </div>
        <div className="card marcas6">
          <img className="card-img" src={Images.dc} />
        </div>
      </div>
    </div>
  );
}
export default MarcasCards;
