import React, { Component } from "react";
import styled from "styled-components";

import NavBar from "./components/NavBar";
import Counters from "./components/Counters";

export default class App extends Component {
  state = {
    itemCounters: 0,
    rowOne: 0,
    rowTwo: 0,
    rowThree: 0,
    rowFour: 0,
  };

  handleClick = (action, numberofRow) => {
    console.log("action", action, "numberrow", numberofRow);

    if (action === "add") {
      this.setState({
        [numberofRow]: this.state[numberofRow] + 1,
      });
    }

    if (action === "substract") {
      this.setState({
        [numberofRow]: this.state[numberofRow] - 1,
      });
    }
  };

  render() {
    const { itemCounters, rowOne, rowTwo, rowThree } = this.state;
    console.log("state", this.state);

    return (
      <Wrapper>
        <NavBar />
        <Counters handleClick={this.handleClick} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
