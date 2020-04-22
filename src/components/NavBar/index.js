import React, { Component } from "react";
import styled from "styled-components";

export default class NavBar extends Component {
  render() {
    return (
      <Wrapper>
        <IconWrapper>
          <Icon></Icon>
        </IconWrapper>
        <CounterField></CounterField>
        <Description></Description>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

const IconWrapper = styled.div``;

const Icon = styled.img``;

const CounterField = styled.div``;

const Description = styled.div``;
