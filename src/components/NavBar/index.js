import React, { Component } from "react";
import styled from "styled-components";
import { ShoppingCartOutline } from "@styled-icons/evaicons-outline";

export default class NavBar extends Component {
  render() {
    const { numerOfActive } = this.props;
    return (
      <Wrapper>
        <IconWrapper>
          <Icon></Icon>
        </IconWrapper>
        <CounterField>{numerOfActive}</CounterField>
        <Description>Items</Description>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: inline-flex;
  padding: 1rem;
  align-items: center;
  font-size: 1.3rem;
  background-color: #f7f6f6;
  width: 100%;
`;

const IconWrapper = styled.div`
  width: 2rem;
`;

const Icon = styled(ShoppingCartOutline)``;

const CounterField = styled.div`
  padding: 0.2rem 1.2rem;
  margin: 1rem;
  border-radius: 13px;
  background-color: lightseagreen;
`;

const Description = styled.div``;
