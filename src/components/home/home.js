import React, { Component } from "react";
import { Title } from "../css/cssPages";
// import {
//   List,
//   List2,
//   List3,
//   List4,
//   GlobalDiv,
//   DivLine,
//   LiCss,
//   Title,
//   LinkPage,
//   PlanTitles,
//   DivBLack,
//   DivLilas,
//   DivVermelha,
//   DivAzul,
// } from "./css/cssPages";
import Headar from "../Header"

class Home extends Component {
  render() {
    return (
      <div>
        <Headar />
        <Title> Ola </Title>
      </div>
    );
  }
}

export default Home;
