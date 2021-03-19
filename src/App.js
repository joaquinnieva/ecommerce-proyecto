import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";

import NavbarSide from './components/NavbarSide';
import NavbarTop from './components/NavbarTop';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from "./pages/Productos";
import ArmaTuPc from "./pages/ArmaTuPc";
import EncontraTuPc from "./pages/EncontraTuPc";
import MiCuenta from "./pages/MiCuenta";
import Ayuda from "./pages/Ayuda";
import MarcasSponsor from "./pages/MarcasSponsor";
import GamerCoins from "./pages/GamerCoins";


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Inicio} />
      <Switch>
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/arma-tu-pc" component={ArmaTuPc} />
        <Route exact path="/encontra-tu-pc" component={EncontraTuPc} />
        <Route exact path="/mi-cuenta" component={MiCuenta} />
        <Route exact path="/ayuda" component={Ayuda} />
        <Route exact path="/marcas-sponsor" component={MarcasSponsor} />
        <Route exact path="/gamer-coins" component={GamerCoins} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
