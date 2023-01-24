import React, { Component } from 'react';
import { BtnBlack, GlobalDiv, TitleBlack } from '../css/cssPages';

class CheckoutBlack extends Component {
  render() {
    return (
      <GlobalDiv>
        <TitleBlack> Voce escolheu o plano 1 </TitleBlack>
        <a href='http://localhost:3000/'> <BtnBlack> VOLTAR </BtnBlack> </a>
      </GlobalDiv>
    );
  }
}

export default CheckoutBlack;