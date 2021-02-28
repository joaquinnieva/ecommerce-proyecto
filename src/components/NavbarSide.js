import React from 'react';
import Images from './Images';
import "./styles/NavbarSide.css"

function NavbarSide () {
    return(
        <div className="navbar-cont">
            <div className="linea-side" />

            <div className="cont-logo"><img className="logosolo" src={Images.logosolo} /><img className="logotitulo" src={Images.logotitulo} /></div>

            <nav className="navbar">
                <div className="nav-item">
                    <img className="item-img" src={Images.inicio} />
                    <div className="item-text">Inicio</div>
                </div>
                <div className="nav-item">
                    <img className="item-img" src={Images.productos} />
                    <div className="item-text">Productos</div>
                </div>
                <div className="nav-item">
                    <img className="item-img" src={Images.armatupc} />
                    <div className="item-text">Armá tu PC</div>
                </div>
                <div className="nav-item">
                    <img className="item-img" src={Images.encontratupc} />
                    <div className="item-text">Encontrá tu PC</div>
                </div>
                <div className="nav-item">
                    <img className="item-img" src={Images.cuenta} />
                    <div className="item-text">Mi cuenta</div>
                </div>
                <div className="nav-item">
                    <img className="item-img" src={Images.ayuda} />
                    <div className="item-text">Ayuda</div>
                </div>
                <div className="nav-item">
                    <img className="item-img" src={Images.sponsor} />
                    <div className="item-text">Marcas sponsor</div>
                </div>
                <div className="nav-item">
                    <img className="item-img" src={Images.coins} />
                    <div className="item-text">Gamer Coins</div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarSide;