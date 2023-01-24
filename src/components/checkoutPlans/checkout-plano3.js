import React, { Component } from 'react';
import { BtnRed, GlobalDiv, TitleRed } from '../css/cssPages';

class CheckoutRed extends Component {
  render() {
    return (
      <GlobalDiv>
        <TitleRed> Voce escolhe o Plano 3 </TitleRed>
        <a href='http://localhost:3000/'> <BtnRed> VOLTAR </BtnRed> </a>
      </GlobalDiv>
    );
  }
}

export default CheckoutRed;