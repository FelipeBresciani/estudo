import React, { Component } from 'react';
import { BtnPurple, GlobalDiv, TitlePurple } from '../css/cssPages';

class CheckoutPurple extends Component {
  render() {
    return (
      <GlobalDiv>
        <TitlePurple>Voce escolheu o plano 2</TitlePurple>
        <a href='http://localhost:3000/'> <BtnPurple> VOLTAR </BtnPurple> </a>
      </GlobalDiv>
    );
  }
}

export default CheckoutPurple;