import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css";

import Home from "./components/home/home";
import CheckoutBlack from './components/checkoutPlans/checkout-plano1';
import CheckoutPurple from './components/checkoutPlans/checkout-plano2';
import CheckoutRed from './components/checkoutPlans/checkout-plano3';
import CheckoutBlue from './components/checkoutPlans/checkout-plano4';
import Planos from './components/plans/planos';
import LoginPage from './components/loginPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/Preto" component={ CheckoutBlack }/>
            <Route path="/Roxo" component={ CheckoutPurple }/>
            <Route path="/Vermelho" component={ CheckoutRed}/>
            <Route path="/Azul" component={ CheckoutBlue }/>
            <Route path="/Planos" component={ Planos }/>
            <Route path="/Login" component={ LoginPage }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;