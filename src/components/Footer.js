import React from "react";
import "./styles/Footer.css";
import Images from "./Images";

function Footer() {
  return (
    <div>
      <div className="contact">
        <div className="contactame contac1">
          <h3>COMPRA GAMER</h3>
          <img className="imgdata" src={Images.DATAWEB} />
        </div>

        <div className="contactame contac2">
          <h3>AYUDA</h3>
          <p>
            Si tenes sugerencias o comentarios.
            <br />
            No dudes en contactarnos
          </p>
        </div>

        <div className="contactame contac3">
          <h3>TRABAJÁ CON NOSOTROS</h3>
        </div>

        <div className="contactame contac4">
          <h3>SEGUINOS EN:</h3>
          <div className="img-cont-footer">
            <a href="https://twitter.com/CompraGamerOK" target="_blank"><img className="imgfooter" src={Images.twitter} /></a>
            <a href="https://www.instagram.com/compragamer_oficial/" target="_blank"><img className="imgfooter" src={Images.instagram} /></a>
            <a href="https://www.facebook.com/compragamer" target="_blank"><img className="imgfooter" src={Images.facebook} /></a>
            <a href="https://www.youtube.com/user/COEMA" target="_blank"><img className="imgfooter" src={Images.youtube} /></a>
          </div>
        </div>

        <p className="copy-footer">
          Las marcas y logos de compragamer.com compragamer.com/tv
          compragamer.com/reviews son Propiedad de Newton Station SRL Todos los
          derechos reservados 2017
        </p>
      </div>
    </div>
  );
}

export default Footer;
