import React, { Component } from "react";
import styled from "styled-components";
import Card from "../Card";

export default class Counters extends Component {
  render() {
    return (
      <Wrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
