import React, { Component } from "react";
import styled from "styled-components";
import Card from "../Card";

export default class Counters extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <Wrapper>
        <Card handleClick={handleClick} numberOfRow={"rowOne"} />
        <Card handleClick={handleClick} numberOfRow={"rowTwo"} />
        <Card handleClick={handleClick} numberOfRow={"rowThree"} />
        <Card handleClick={handleClick} numberOfRow={"rowFour"} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
