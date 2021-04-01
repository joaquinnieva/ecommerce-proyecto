import React from "react";
import "./styles/Footer.css";
import Images from "./Images";

function Footer() {
  return (
    <div>
      <div className="contact">
        <div className="contactame contac1">
          <h3>ecommerce</h3>
        </div>

        <div className="contactame contac2">
          <h3><a href="#/ayuda" className="contact-ayuda">AYUDA</a></h3>
        </div>

        <div className="contactame contac3">
          <h3>TRABAJÁ CON NOSOTROS</h3>
        </div>

        <div className="contactame contac4">
          <h3>SEGUINOS EN:</h3>
          <div className="img-cont-footer">{/*eslint-disable-next-line*/}
            <a href="#"><img className="imgfooter" src={Images.twitter}  alt="icon"/></a>{/*eslint-disable-next-line*/}
            <a href="#"><img className="imgfooter" src={Images.instagram}  alt="icon"/></a>{/*eslint-disable-next-line*/}
            <a href="#"><img className="imgfooter" src={Images.facebook} alt="icon" /></a>{/*eslint-disable-next-line*/}
            <a href="#"><img className="imgfooter" src={Images.youtube}  alt="icon"/></a>
          </div>
        </div>

        <p className="copy-footer">
        &copy;Todos los
          derechos reservados.
        </p>
      </div>
    </div>
  );
}

export default Footer;
