import React, { Component } from "react";
import styled from "styled-components";

import NavBar from "./components/NavBar";
import Counters from "./components/Counters";

export default class App extends Component {
  state = {
    values: [0, 0, 0, 0],
    numerOfActive: 0,
    // itemCounters: 0,
    // cards: [
    //   { id: 1, value: 0 },
    //   { id: 2, value: 0 },
    //   { id: 3, value: 0 },
    //   { id: 4, value: 0 },
    // ],
  };

  handleClick = (action, index) => {
    const values = this.state.values;

    if (action === "add") {
      values[index]++;
      this.setState({
        values,
      });
    }

    if (action === "substract") {
      values[index]--;
      this.setState({
        values,
      });
    }

    if (action === "delete") {
      const valuesAfterDelete = values;
      let removed = valuesAfterDelete.splice(index, 1);
      console.log("valuesAfterDelete", valuesAfterDelete);
      this.setState({
        values: valuesAfterDelete,
      });
    }
    this.handleCount();
  };

  handleCount = () => {
    const numerOfActive = this.state.values.filter((e) => Boolean(e)).length;

    this.setState({
      numerOfActive: numerOfActive,
    });
  };

  // if (action === "delete") {
  //   const updatedCards = this.state.cards.filter((filtered) => {
  //     return id !== filtered.id;
  //   });
  //   console.log("updatedCards", updatedCards);
  //   this.setState({
  //     cards: updatedCards,
  //   });
  // }
  // if (action === "add") {
  //   const cardId = this.state.cards.find((card) => {
  //     return card.id === id;
  //   });
  //   cardId.value = cardId.value + 1;
  //   const newCards = this.state.cards.filter((filtered) => {
  //     return filtered.id !== cardId.id;
  //   });
  //   this.setState({
  //     cards: [cardId, ...newCards],
  //   });
  // }
  // if (action === "substract") {
  //   const cardId = this.state.cards.find((card) => {
  //     return card.id === id;
  //   });
  //   cardId.value = cardId.value - 1;
  //   const newCards = this.state.cards.filter((filtered) => {
  //     return filtered.id !== cardId.id;
  //   });
  //   this.setState({
  //     cards: [...newCards, cardId],
  //   });
  // }

  render() {
    const { numerOfActive } = this.state;

    return (
      <Wrapper>
        <NavBar numerOfActive={numerOfActive} />
        <Counters handleClick={this.handleClick} cards={this.state.values} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
