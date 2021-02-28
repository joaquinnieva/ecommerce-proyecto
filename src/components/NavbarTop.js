import React from 'react';
import Images from './Images';
import "./styles/NavbarTop.css"

function NavbarTop () {
    return(
        <div className="navbartop">
            <div className="framefix"></div>

            <div className="buscador">componente buscador</div>

            <div className="carrito">componente carrito</div>

        </div>
    );
}

export default NavbarTop;