import React, { Component } from "react";
import styled from "styled-components";

export default class Card extends Component {
  render() {
    const { handleClick, card } = this.props;

    return (
      <Wrapper>
        <Counter>{card.value === 0 ? "Zero" : card.value}</Counter>
        <Button onClick={() => handleClick("add", card.id)}>+</Button>
        <Button onClick={() => handleClick("substract", card.id)}>-</Button>
        <Button onClick={() => handleClick("delete", card.id)}>Bin</Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

const Counter = styled.div``;

const Button = styled.button``;
