import React from "react";
import NavbarSide from "../components/NavbarSide";
import NavbarTop from "../components/NavbarTop";
import Footer from "../components/Footer";
import CarritoItems from "../components/CarritoItems";

function Carrito() {
  return (
    <>
      <NavbarSide />
      <NavbarTop />
        <CarritoItems />
      <Footer />
    </>
  );
}

export default Carrito;
