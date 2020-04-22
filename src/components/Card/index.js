import React, { Component } from "react";
import styled from "styled-components";

export default class Card extends Component {
  render() {
    return (
      <Wrapper>
        <Counter></Counter>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

const Button = styled.div``;
