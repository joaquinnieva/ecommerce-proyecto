import React from "react";
import NavbarSide from "../components/NavbarSide";
import NavbarTop from "../components/NavbarTop";
import Footer from "../components/Footer";
import CarritoItems from "../components/CarritoItems";
import ProductosContext from "../components/context/ProductosContext";

function Carrito() {
  return (
    <>
      <NavbarSide />
      <NavbarTop />
      <ProductosContext>
        <CarritoItems />
      </ProductosContext>
      <Footer />
    </>
  );
}

export default Carrito;
