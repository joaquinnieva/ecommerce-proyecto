import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CarritoIcon from '../components/CarritoIcon';
import routesNavigation from '../data/routesNavigation';
import '../styles/NavbarSide.css';
import Images from './Images';

function NavbarSide() {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar-container">
      <div className="menu" onClick={handleClick}>
        <img className="menu-icon" src={Images.menu} alt="icono" />
      </div>
      <CarritoIcon></CarritoIcon>
      <div className="linea-side"></div>
      <img src={Images.logoecommerce1} alt="" className="brand-img" />
      <div className={click ? 'navbar-contenido-close' : 'navbar-contenido'}>
        <nav className="navbar-side">
          {routesNavigation.map((route, index) => (
            <NavLink key={index} activeClassName="active-nav" className="nav-item-side" to={route.page}>
              <div className="item-img">{route.image}</div>
              <div className="item-text">{route.name}</div>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default NavbarSide;
