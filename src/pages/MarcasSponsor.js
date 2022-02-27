import React from 'react';
import Images from '../components/Images';
import '../styles/MarcasSponsor.css';

function MarcasSponsor() {
  return (
    <div className="cont-page">
      <div className="cardmarcas-cont">
        <div className="card">
          <img className="card-img" src={Images.nike} alt="marca" />
        </div>
        <div className="card">
          <img className="card-img" src={Images.adidas} alt="marca" />
        </div>
        <div className="card">
          <img className="card-img" src={Images.vans} alt="marca" />
        </div>
        <div className="card">
          <img className="card-img" src={Images.reebok} alt="marca" />
        </div>
        <div className="card">
          <img className="card-img" src={Images.puma} alt="marca" />
        </div>
        <div className="card">
          <img className="card-img" src={Images.dc} alt="marca" />
        </div>
        <div className="card">
          <img
            className="card-img img-ext"
            src="https://seeklogo.com/images/S/samsung-logo-8A87EDFB33-seeklogo.com.png"
            alt="marca"
          />
        </div>
        <div className="card">
          <img
            className="card-img img-ext"
            src="https://seeklogo.com/images/S/SanDisk_-_Redesign_2007-logo-5157080C08-seeklogo.com.png"
            alt="marca"
          />
        </div>
        <div className="card">
          <img
            className="card-img img-ext"
            src="https://seeklogo.com/images/A/Acer-logo-E212C99A64-seeklogo.com.png"
            alt="marca"
          />
        </div>
        <div className="card">
          <img
            className="card-img img-ext"
            src="https://seeklogo.com/images/W/Western_Digital-logo-02FAB485DE-seeklogo.com.png"
            alt="marca"
          />
        </div>
        <div className="card">
          <img
            className="card-img img-ext"
            src="https://seeklogo.com/images/F/Fjallraven-logo-2D98EE8205-seeklogo.com.png"
            alt="marca"
          />
        </div>
      </div>
    </div>
  );
}
export default MarcasSponsor;
