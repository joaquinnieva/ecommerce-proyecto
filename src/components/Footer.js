import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import Images from './Images';

function Footer() {
  return (
    <footer>
      <div className="contact">
        <div className="contactame footer-brand">
          <Link to="/home" className="contact-ayuda">
            ecommerce
          </Link>
        </div>

        <div className="contactame footer-links">
          <p>
            <Link to="/ayuda" className="contact-ayuda">
              AYUDA
            </Link>
          </p>
          <p>
            <Link to="/ayuda" className="contact-ayuda">
              TRABAJÁ CON NOSOTROS
            </Link>
          </p>
        </div>

        <div className="contactame footer-social">
          <p>SEGUINOS EN:</p>
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

        <p className="copy-footer">
          Desarrollado por{' '}
          <a href="https://joaquinnieva.github.io/joaquinnieva/" target="_blank" rel="noreferrer">
            Joaquin Nieva
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
