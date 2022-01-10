import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import Images from './Images';

function Footer() {
  return (
    <footer>
      <div className="contact">
        <div className="contactame contac1">
          <h3>ecommerce</h3>
        </div>

        <div className="contactame contac2">
          <h3>
            <Link to="/ayuda" className="contact-ayuda">
              AYUDA
            </Link>
          </h3>
        </div>

        <div className="contactame contac3">
          <h3>
            <Link to="/ayuda" className="contact-ayuda">
              TRABAJÁ CON NOSOTROS
            </Link>
          </h3>
        </div>

        <div className="contactame contac4">
          <h3>SEGUINOS EN:</h3>
          <div className="img-cont-footer">
            <Link to="/ayuda">
              <img className="imgfooter" src={Images.twitter} alt="icon" />
            </Link>
            <Link to="/ayuda">
              <img className="imgfooter" src={Images.instagram} alt="icon" />
            </Link>
            <Link to="/ayuda">
              <img className="imgfooter" src={Images.facebook} alt="icon" />
            </Link>
            <Link to="/ayuda">
              <img className="imgfooter" src={Images.youtube} alt="icon" />
            </Link>
          </div>
        </div>

        <p className="copy-footer">© Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
