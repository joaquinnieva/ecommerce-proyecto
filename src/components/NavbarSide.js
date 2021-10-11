import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Images from "./Images";
import "./styles/NavbarSide.css";

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

      <div className={click ? "navbar-contenido-close" : "navbar-contenido"}>
        <nav className="navbar">
          <NavLink activeClassName="active" className="nav-item i1" to="/inicio">
            <img className="item-img" src={Images.inicio} alt="icono" />
            <div className="item-text">Inicio</div>
          </NavLink>
          <NavLink activeClassName="active" className="nav-item i2" to="/productos">
            <img className="item-img" src={Images.productos} alt="icono" />
            <div className="item-text">Productos</div>
          </NavLink>
          <NavLink activeClassName="active" className="nav-item i6" to="/ayuda">
            <img className="item-img" src={Images.ayuda} alt="icono" />
            <div className="item-text">Ayuda</div>
          </NavLink>
          <NavLink activeClassName="active" className="nav-item i7" to="/marcas-sponsor">
            <img className="item-img" src={Images.sponsor} alt="icono" />
            <div className="item-text">Marcas sponsor</div>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default NavbarSide;
