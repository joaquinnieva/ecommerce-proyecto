import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";
import Images from './Images';
import "./styles/NavbarSide.css"

function NavbarSide () {
    const [click,setClick] = useState(true);
    const handleClick = () => setClick(!click);
    

    return(
        <div className="navbar-container">

            <div className="menu" onClick={handleClick} >
                <div className="menu-title">MENU</div>
                <img className="menu-icon" src={Images.menu} />
            </div>
            
            <div className="linea-side"></div>

            <div className="cont-logo"><img className="logosolo" src={Images.logosolo} /></div>

            <div className={click ? "navbar-contenido-close" : "navbar-contenido"}>

            <nav className="navbar">
                <NavLink className="nav-item" to="/inicio">
                    <img className="item-img" src={Images.inicio} />
                    <div className="item-text">Inicio</div>
                </NavLink>
                <NavLink className="nav-item" to="/productos">
                    <img className="item-img" src={Images.productos} />
                    <div className="item-text">Productos</div>
                </NavLink>
                <NavLink className="nav-item" to="/arma-tu-pc" >
                    <img className="item-img" src={Images.armatupc} />
                    <div className="item-text">Armá tu PC</div>
                </NavLink>
                <NavLink className="nav-item" to="/encontra-tu-pc" >
                    <img className="item-img" src={Images.encontratupc} />
                    <div className="item-text">Encontrá tu PC</div>
                </NavLink>
                <NavLink className="nav-item" to="/mi-cuenta" >
                    <img className="item-img" src={Images.cuenta} />
                    <div className="item-text">Mi cuenta</div>
                </NavLink>
                <NavLink className="nav-item" to="/ayuda" >
                    <img className="item-img" src={Images.ayuda} />
                    <div className="item-text">Ayuda</div>
                </NavLink>
                <NavLink className="nav-item" to="/marcas-sponsor" >
                    <img className="item-img" src={Images.sponsor} />
                    <div className="item-text">Marcas sponsor</div>
                </NavLink>
                <NavLink className="nav-item" to="/gamer-coins" >
                    <img className="item-img" src={Images.coins} />
                    <div className="item-text">Gamer Coins</div>
                </NavLink>
            </nav>
        </div>
        </div>
    );
}

export default NavbarSide;