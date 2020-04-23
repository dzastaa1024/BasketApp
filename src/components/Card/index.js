import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Trash2Outline } from "@styled-icons/evaicons-outline";

export default class Card extends Component {
  render() {
    const { handleClick, card, index } = this.props;

    return (
      <Wrapper>
        <Counter>
          {card === 0 ? (
            <Content>{"Zero"}</Content>
          ) : (
            <Content cardStyle>{card}</Content>
          )}
        </Counter>
        <Button onClick={() => handleClick("add", index)}>+</Button>
        <Button
          onClick={() => handleClick("substract", index)}
          disabled={!card}
          minus
        >
          -
        </Button>
        <Button bin onClick={() => handleClick("delete", index)}>
          <IconBin></IconBin>
        </Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.6rem;
  font-size: 1.3rem;
`;

const Counter = styled.div``;

const Button = styled.button`
  border-radius: 8px;
  background-color: #989795;
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  outline: none;

  ${(props) =>
    props.minus &&
    css`
      background-color: #12c0d6;
    `}

  ${(props) =>
    props.bin &&
    css`
      background-color: #e20000;
    `}
`;

const IconBin = styled(Trash2Outline)`
  width: 1rem;
`;

const Content = styled.div`
  border-radius: 8px;
  background-color: #ffaa00;
  padding: 0.3rem;
  width: 2.5rem;
  text-align: center;

  ${(props) =>
    props.cardStyle &&
    css`
      background-color: #4caf50;
    `}
`;
