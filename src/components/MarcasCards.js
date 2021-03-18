import React from "react";
import Images from "./Images";
import "./styles/MarcasCards.css";

function MarcasCards() {
  return (
    <div className="cont-page">
      <div className="cardmarcas-cont">
        <div className="card marcas1">
          <img className="card-img" src={Images.hyperx} />
        </div>
        <div className="card marcas2">
          <img className="card-img" src={Images.zotac} />
        </div>
        <div className="card marcas3">
          <img className="card-img" src={Images.asus} />
        </div>
        <div className="card marcas4">
          <img className="card-img" src={Images.seagate} />
        </div>
        <div className="card marcas5">
          <img className="card-img" src={Images.mnvidia} />
        </div>
        <div className="card marcas6">
          <img className="card-img" src={Images.amd} />
        </div>
      </div>
    </div>
  );
}
export default MarcasCards;
