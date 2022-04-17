import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND, DEVELOPER_NAME, FOOTER_DEVELOPED, FOOTER_FOLLOWME, LINK_HELP, LINK_JOB } from '../data/constants';
import '../styles/Footer.css';
import Images from './Images';

function Footer() {
  return (
    <footer>
      <div className="contact">
        <div className="contactame footer-brand">
          <Link to="/home" className="contact-ayuda">
            {BRAND}
          </Link>
        </div>
        <div className="contactame footer-links">
          <p>
            <Link to="/help" className="contact-ayuda">
              {LINK_HELP}
            </Link>
          </p>
          <p>
            <Link to="/help" className="contact-ayuda">
              {LINK_JOB}
            </Link>
          </p>
        </div>
        <div className="contactame footer-social">
          <p>{FOOTER_FOLLOWME}</p>
          <div className="img-cont-footer">
            <Link to="/help">
              <img className="imgfooter" src={Images.twitter} alt="icon" />
            </Link>
            <Link to="/help">
              <img className="imgfooter" src={Images.instagram} alt="icon" />
            </Link>
            <Link to="/help">
              <img className="imgfooter" src={Images.facebook} alt="icon" />
            </Link>
            <Link to="/help">
              <img className="imgfooter" src={Images.youtube} alt="icon" />
            </Link>
          </div>
        </div>

        <p className="copy-footer">
          {FOOTER_DEVELOPED}&nbsp;
          <a href="https://joaquinnieva.github.io/joaquinnieva/" target="_blank" rel="noreferrer">
            {DEVELOPER_NAME}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
