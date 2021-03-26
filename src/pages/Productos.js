import React from "react";
import NavbarSide from "../components/NavbarSide";
import NavbarTop from "../components/NavbarTop";
import Footer from "../components/Footer";
import ProductosListado from "../components/ProductosListado";
import {Provider} from 'react-redux';
import store from '../components/redux/store';

function Productos() {
  return (
    <>
      <NavbarSide />
      <NavbarTop />
          <ProductosListado />
      <Footer />
    </>
  );
}

export default Productos;
