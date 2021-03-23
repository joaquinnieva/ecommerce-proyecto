import React from "react";
import "./styles/ProductosListado.css";
import nike1 from "../components/img/productos/nike-sb-dunk.png";
import nike2 from "../components/img/productos/nike-snkrs1.png";
import nike3 from "../components/img/productos/nike-snkrs2.png";

function ProductosListado() {
  const productos = [
    {
      id: "1",
      name: "Nike SB Dunk",
      type: "shoe",
      image: nike1,
      price: "$1000",
    },
    {
      id: "2",
      name: "Nike Snkrs Black",
      type: "shoe",
      image: nike2,
      price: "$2000",
    },
    {
      id: "3",
      name: "Nike Snkrs White&Blue",
      type: "shoe",
      image: nike3,
      price: "$3000",
    },
    {
      id: "4",
      name: "Nike SB Dunk",
      type: "shoe",
      image: nike1,
      price: "$1000",
    },
    {
      id: "5",
      name: "Nike Snkrs Black",
      type: "shoe",
      image: nike2,
      price: "$2000",
    },
    {
      id: "6",
      name: "Nike Snkrs White&Blue",
      type: "shoe",
      image: nike3,
      price: "$3000",
    },
    {
      id: "7",
      name: "Nike SB Dunk",
      type: "shoe",
      image: nike1,
      price: "$1000",
    },
    {
      id: "8",
      name: "Nike Snkrs Black",
      type: "shoe",
      image: nike2,
      price: "$2000",
    },
    {
      id: "9",
      name: "Nike Snkrs White&Blue",
      type: "shoe",
      image: nike3,
      price: "$3000",
    },
    {
      id: "10",
      name: "Nike SB Dunk",
      type: "shoe",
      image: nike1,
      price: "$1000",
    },
    {
      id: "11",
      name: "Nike Snkrs Black",
      type: "shoe",
      image: nike2,
      price: "$2000",
    },
    {
      id: "12",
      name: "Nike Snkrs White&Blue",
      type: "shoe",
      image: nike3,
      price: "$3000",
    },
  ];

  return (
    <div className="cont-page-prod">
      <div className="listaproductos">
        {productos.map((producto) => (
          <div key={producto.id} className="productos-item">
            <img src={producto.image} className="item-img" />
            <div className="item-name"> {producto.name} </div>
            <div className="item-price"> {producto.price} </div>
            <div className="item-carrito" > Agregar al carrito </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductosListado;
