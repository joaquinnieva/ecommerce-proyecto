import React from 'react';

function CardProducto (props) {
    return(
        <div className="cont-card">
            <div className="cont-img-card">
                <img className="img-card" src={props.imagen} />
            </div>
            <div className="cont-texto-card">
                <h1 className="texto-nombre">Producto</h1>
                <h1 className="texto-tipo">Clase</h1>
                <h1 className="texto-precio">Precio</h1>
                <h1 className="texto-carrito">Carrito</h1>
            </div>
        </div>
    )
}
export default CardProducto;