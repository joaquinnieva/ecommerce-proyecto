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
      <Route path="/inicio" component={Inicio} />
      <Switch>
        <Route path="/productos" component={Productos} />
        <Route path="/arma-tu-pc" component={ArmaTuPc} />
        <Route path="/encontra-tu-pc" component={EncontraTuPc} />
        <Route path="/mi-cuenta" component={MiCuenta} />
        <Route path="/ayuda" component={Ayuda} />
        <Route path="/marcas-sponsor" component={MarcasSponsor} />
        <Route path="/gamer-coins" component={GamerCoins} />

        <Route path="/">
            <Redirect to="/inicio" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
