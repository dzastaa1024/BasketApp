import React, { Component } from "react";
import styled from "styled-components";
import Card from "../Card";

export default class Counters extends Component {
  render() {
    const { handleClick, cards } = this.props;

    return (
      <Wrapper>
        {cards.map((card, index) => {
          return <Card handleClick={handleClick} card={card} index={index} />;
        })}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 11rem;
  margin-left: 10rem;
  margin-top: 2rem;
`;
