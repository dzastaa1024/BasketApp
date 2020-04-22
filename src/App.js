import React, { Component } from "react";
import styled from "styled-components";

import NavBar from "./components/NavBar";
import Counters from "./components/Counters";

export default class App extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <Wrapper>
        <NavBar />
        <Counters />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
