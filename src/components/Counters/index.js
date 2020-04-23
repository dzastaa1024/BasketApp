import React, { Component } from "react";
import styled from "styled-components";
import Card from "../Card";

export default class Counters extends Component {
  render() {
    const { handleClick, cards } = this.props;

    return (
      <Wrapper>
        {cards.map((card) => {
          return <Card handleClick={handleClick} card={card} />;
        })}

        {/* <Card
          handleClick={handleClick}
          numberOfRow={"rowOne"}
          valuesOfRow={valuesOfRow.rowOne}
        />
        <Card
          handleClick={handleClick}
          numberOfRow={"rowTwo"}
          valuesOfRow={valuesOfRow.rowTwo}
        />
        <Card
          handleClick={handleClick}
          numberOfRow={"rowThree"}
          valuesOfRow={valuesOfRow.rowThree}
        />
        <Card
          handleClick={handleClick}
          numberOfRow={"rowFour"}
          valuesOfRow={valuesOfRow.rowFour}
        /> */}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
