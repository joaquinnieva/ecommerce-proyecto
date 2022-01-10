import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import routesNavigation from '../data/routesNavigation';
import '../styles/NavbarSide.css';
import Images from './Images';

function NavbarSide() {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar-container">
      <div className="menu" onClick={handleClick}>
        <div className="menu-title">MENÚ</div>
        <img className="menu-icon" src={Images.menu} alt="icono" />
      </div>
      <div className="linea-side"></div>
      <div className="fix-logo"></div>
      <div className={click ? 'navbar-contenido-close' : 'navbar-contenido'}>
        <nav className="navbar-side">
          {routesNavigation.map((route, index) => (
            <NavLink key={index} activeClassName="active-nav" className="nav-item-side" to={route.page}>
              <img className="item-img" src={route.image} alt="icono" />
              <div className="item-text">{route.name}</div>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default NavbarSide;
