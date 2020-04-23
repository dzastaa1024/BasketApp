import React, { Component } from "react";
import styled from "styled-components";

import NavBar from "./components/NavBar";
import Counters from "./components/Counters";

export default class App extends Component {
  state = {
    itemCounters: 0,
    cards: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleClick = (action, id) => {
    if (action === "delete") {
      const updatedCards = this.state.cards.filter((filtered) => {
        return id !== filtered.id;
      });
      console.log("updatedCards", updatedCards);

      this.setState({
        cards: updatedCards,
      });
    }

    if (action === "add") {
      const cardId = this.state.cards.find((card) => {
        return card.id === id;
      });
      cardId.value = cardId.value + 1;

      const newCards = this.state.cards.filter((filtered) => {
        return filtered.id !== cardId.id;
      });

      this.setState({
        cards: [cardId, ...newCards],
      });
    }

    if (action === "substract") {
      const cardId = this.state.cards.find((card) => {
        return card.id === id;
      });
      cardId.value = cardId.value - 1;

      const newCards = this.state.cards.filter((filtered) => {
        return filtered.id !== cardId.id;
      });

      this.setState({
        cards: [...newCards, cardId],
      });
    }
  };

  render() {
    const { itemCounters } = this.state;
    console.log("state", this.state);

    return (
      <Wrapper>
        <NavBar />
        <Counters handleClick={this.handleClick} cards={this.state.cards} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
