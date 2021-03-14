import React from "react";
import './styles/Footer.css';
import Images from './Images';

function Footer() {
  return (
    <div>
        <div className="contact">
         
          <div className="contactame1">
            <h2 >Compra Gamer</h2>
            <img className="imgdata" src={Images.DATAWEB} />
          </div>

          <div className="contactame2">
            <h2>Ayuda</h2>
            <p>Si tenes sugerencias o comentarios.No dudes en contactarnos</p>
          </div>

          <div className="contactame3">
            <h5 >Trabajá con nosotros</h5>
          </div>

          <div className="contactame4">
            <h2>Seguinos en:</h2>
          </div>

        </div>
    </div>
  );
}

export default Footer;
