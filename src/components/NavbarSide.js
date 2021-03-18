import React, {useState} from 'react';
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

            <div className="fix-logo"></div>

            <div className={click ? "navbar-contenido-close" : "navbar-contenido"}>

            <nav className="navbar">
                <a className="nav-item" href="/inicio">
                    <img className="item-img" src={Images.inicio} />
                    <div className="item-text">Inicio</div>
                </a>
                <a className="nav-item" href="/productos">
                    <img className="item-img" src={Images.productos} />
                    <div className="item-text">Productos</div>
                </a>
                {/* <a className="nav-item" href="/arma-tu-pc" >
                    <img className="item-img" src={Images.armatupc} />
                    <div className="item-text">Armá tu PC</div>
                </a> */}
                <a className="nav-item" href="/encontra-tu-pc" >
                    <img className="item-img" src={Images.encontratupc} />
                    <div className="item-text">Encontrá tu PC</div>
                </a>
                {/* <a className="nav-item" href="/mi-cuenta">
                    <img className="item-img" src={Images.cuenta} />
                    <div className="item-text">Mi cuenta</div>
                </a> */}
                <a className="nav-item" href="/ayuda" >
                    <img className="item-img" src={Images.ayuda} />
                    <div className="item-text">Ayuda</div>
                </a>
                <a className="nav-item" href="/marcas-sponsor" >
                    <img className="item-img" src={Images.sponsor} />
                    <div className="item-text">Marcas sponsor</div>
                </a>
                <a className="nav-item" href="/gamer-coins" >
                    <img className="item-img" src={Images.coins} />
                    <div className="item-text">Gamer Coins</div>
                </a>
            </nav>
        </div>
        </div>
    );
}

export default NavbarSide;