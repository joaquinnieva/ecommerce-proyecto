import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Redirect,
  HashRouter
} from "react-router-dom";

import NavbarSide from './components/NavbarSide';
import NavbarTop from './components/NavbarTop';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from "./pages/Productos";
import MiCuenta from "./pages/MiCuenta";
import Ayuda from "./pages/Ayuda";
import MarcasSponsor from "./pages/MarcasSponsor";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <HashRouter>
    
      <Switch>
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/mi-cuenta" component={MiCuenta} />
        <Route exact path="/ayuda" component={Ayuda} />
        <Route exact path="/marcas-sponsor" component={MarcasSponsor} />
        <Route exact path="/carrito" component={Carrito} /> 
      </Switch>
      <Route exact path="/" component={Inicio} />
    </HashRouter>
  );
}

export default App;
