import React, { Component } from "react";
import styled from "styled-components";

export default class Card extends Component {
  render() {
    const { handleClick, numberOfRow } = this.props;

    return (
      <Wrapper>
        <Counter></Counter>
        <Button onClick={() => handleClick("add", numberOfRow)}>+</Button>
        <Button onClick={() => handleClick("substract", numberOfRow)}>-</Button>
        <Button onClick={() => handleClick("delete", numberOfRow)}>Bin</Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

const Counter = styled.div``;

const Button = styled.button``;
