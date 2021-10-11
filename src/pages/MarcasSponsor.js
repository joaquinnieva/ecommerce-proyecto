import React from "react";
import Images from "../components/Images";
import "../components/styles/MarcasSponsor.css";

function MarcasSponsor() {
  return (
    <div className="cont-page">
      <div className="cardmarcas-cont">
        <div className="card marcas1">
          <img className="card-img" src={Images.nike} alt="marca"/>
        </div>
        <div className="card marcas2">
          <img className="card-img" src={Images.adidas} alt="marca"/>
        </div>
        <div className="card marcas3">
          <img className="card-img" src={Images.vans} alt="marca"/>
        </div>
        <div className="card marcas4">
          <img className="card-img" src={Images.reebok} alt="marca"/>
        </div>
        <div className="card marcas5">
          <img className="card-img" src={Images.puma} alt="marca"/>
        </div>
        <div className="card marcas6">
          <img className="card-img" src={Images.dc} alt="marca"/>
        </div>
      </div>
    </div>
  );
}
export default MarcasSponsor;
