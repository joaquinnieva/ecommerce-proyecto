import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import NavbarSide from '../components/NavbarSide';
import NavbarTop from '../components/NavbarTop';
import Ayuda from '../pages/Ayuda';
import Carrito from '../pages/Carrito';
import Inicio from '../pages/Inicio';
import MarcasSponsor from '../pages/MarcasSponsor';
import ProductoDetalle from '../pages/ProductoDetalle';
import Productos from '../pages/Productos';

function Router() {
  return (
    <BrowserRouter>
      <NavbarTop />
      <NavbarSide />
      <Switch>
        <Redirect from="/ecommerce-proyecto" to="/home" />
        <Route exact path="/home" component={Inicio} />
        <Route exact path="/products" component={Productos} />
        <Route exact path="/product/:id" component={ProductoDetalle} />
        <Route exact path="/help" component={Ayuda} />
        <Route exact path="/sponsors" component={MarcasSponsor} />
        <Route exact path="/cart" component={Carrito} />
        <Route path="*" component={Inicio} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
