import React from "react";
import NavbarSide from "../components/NavbarSide";
import NavbarTop from "../components/NavbarTop";
import Footer from "../components/Footer";
import ProductosListado from "../components/ProductosListado";
import ProductosContext from "../components/context/ProductosContext";

function Productos() {
  return (
    <>
      <NavbarSide />
      <NavbarTop />
      <ProductosContext>
        <ProductosListado />
      </ProductosContext>

      <Footer />
    </>
  );
}

export default Productos;
