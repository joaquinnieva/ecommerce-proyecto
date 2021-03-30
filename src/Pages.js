import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

import Inicio from './pages/Inicio';
import Productos from "./pages/Productos";
import Ayuda from "./pages/Ayuda";
import MarcasSponsor from "./pages/MarcasSponsor";
import Carrito from "./pages/Carrito";

function Pages() {
  return (
    <HashRouter>
    
      <Switch>
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/ayuda" component={Ayuda} />
        <Route exact path="/marcas-sponsor" component={MarcasSponsor} />
        <Route exact path="/carrito" component={Carrito} /> 
      </Switch>
      <Route exact path="/" component={Inicio} />
    </HashRouter>
  );
}

export default Pages;
