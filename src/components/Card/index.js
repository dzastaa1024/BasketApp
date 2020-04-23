import React, { Component } from "react";
import styled from "styled-components";

export default class Card extends Component {
  render() {
    const { handleClick, card, index } = this.props;

    return (
      <Wrapper>
        <Counter>{card === 0 ? "Zero" : card}</Counter>
        <Button onClick={() => handleClick("add", index)}>+</Button>
        <Button onClick={() => handleClick("substract", index)}>-</Button>
        <Button onClick={() => handleClick("delete", index)}>Bin</Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

const Counter = styled.div``;

const Button = styled.button``;
