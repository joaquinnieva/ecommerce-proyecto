import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NavbarSide from "./components/NavbarSide";
import NavbarTop from "./components/NavbarTop";
import Ayuda from "./pages/Ayuda";
import Carrito from "./pages/Carrito";
import Inicio from "./pages/Inicio";
import MarcasSponsor from "./pages/MarcasSponsor";
import Productos from "./pages/Productos";

function Router() {
  return (
    <BrowserRouter>
      <NavbarTop />
      <NavbarSide />
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

export default Router;
