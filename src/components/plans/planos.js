import React, { Component } from "react";
import {
  List,
  List2,
  List3,
  List4,
  GlobalDiv,
  DivLine,
  LiCss,
  Title,
  LinkPage,
  PlanTitles,
  DivBLack,
  DivLilas,
  DivVermelha,
  DivAzul,
} from "../css/cssPages";
import Headar from "../Header"

class Planos extends Component {
  render() {
    return (
      <GlobalDiv> 
        <Headar/>
        <Title> Ola, escolha o melhor plano para voce: </Title>
        <div>
          <DivLine>
            <DivBLack>
              <LinkPage href="http://localhost:3000/Preto">
                <List>
                  <PlanTitles> plano 1 </PlanTitles>
                  <LiCss>Item 1</LiCss>
                  <LiCss>Item 2</LiCss>
                  <LiCss>Item 3</LiCss>
                  <LiCss>Item 4</LiCss>
                </List>
              </LinkPage>
            </DivBLack>
            <DivLilas>
              <LinkPage href="http://localhost:3000/Roxo">
                <List2>
                  <PlanTitles> plano 2 </PlanTitles>
                  <LiCss>Item 1</LiCss>
                  <LiCss>Item 2</LiCss>
                  <LiCss>Item 3</LiCss>
                  <LiCss>Item 4</LiCss>
                </List2>
              </LinkPage>
            </DivLilas>
          </DivLine>
          <DivLine>
            <DivVermelha>
              <LinkPage href="http://localhost:3000/Vermelho">
                <List3>
                  <PlanTitles> plano 3 </PlanTitles>
                  <LiCss>Item 1</LiCss>
                  <LiCss>Item 2</LiCss>
                  <LiCss>Item 3</LiCss>
                  <LiCss>Item 4</LiCss>
                </List3>
              </LinkPage>
            </DivVermelha>
            <DivAzul>
              <LinkPage href="http://localhost:3000/Azul">
                <List4>
                  <PlanTitles> plano 4 </PlanTitles>
                  <LiCss>Item 1</LiCss>
                  <LiCss>Item 2</LiCss>
                  <LiCss>Item 3</LiCss>
                  <LiCss>Item 4</LiCss>
                </List4>
              </LinkPage>
            </DivAzul>
          </DivLine>
        </div>
      </GlobalDiv>
    );
  }
}

export default Planos;
