import React, { Component } from 'react';
import { BtnBlue, GlobalDiv, TitleBlue } from '../css/cssPages';

class CheckoutBlue extends Component {
  render() {
    return (
      <GlobalDiv>
        <TitleBlue>Voce escolheu o plano 4</TitleBlue>
        <a href='http://localhost:3000/'> <BtnBlue> VOLTAR </BtnBlue> </a>
      </GlobalDiv>
    );
  }
}

export default CheckoutBlue;