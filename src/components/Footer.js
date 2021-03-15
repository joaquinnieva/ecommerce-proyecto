import React from "react";
import './styles/Footer.css';
import Images from './Images';

function Footer() {
  return (
    <div>
        <div className="contact">
         
          <div className="contactame1">
            <h3>COMPRA GAMER</h3>
            <img className="imgdata" src={Images.DATAWEB} />
          </div>

          <div className="contactame2">
            <h3>AYUDA</h3>
            <p>Si tenes sugerencias o comentarios.No dudes en contactarnos</p>
          </div>

          <div className="contactame3">
            <h3>TRABAJÁ CON NOSOTROS</h3>
          </div>

          <div className="contactame4">
            <h3>SEGUINOS EN:</h3>
          </div>

        </div>
    </div>
  );
}

export default Footer;
