import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Ayuda from "./pages/Ayuda";
import MarcasSponsor from "./pages/MarcasSponsor";
import Carrito from "./pages/Carrito";
import NavbarTop from "./components/NavbarTop";
import NavbarSide from "./components/NavbarSide";
import Footer from "./components/Footer";

function Pages() {
  return (
    <BrowserRouter>
      <NavbarSide />
      <NavbarTop />
      <Switch>
        <Redirect from="/ecommerce-proyecto" to="/inicio" />
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/ayuda" component={Ayuda} />
        <Route exact path="/marcas-sponsor" component={MarcasSponsor} />
        <Route exact path="/carrito" component={Carrito} />
        <Route path="*" component={Inicio} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Pages;
