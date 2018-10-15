import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, Divider, ButtonGroup } from "react-native-elements";

export default class SportSelection extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };

  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = ["NFL", "NBA", "NHL", "MLB"];
    const { selectedIndex } = this.state;

    return (
      <ButtonGroup
        onPress={(index)=>this.updateIndex(index)}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 25 }}
      />
    );
  }
}

const SportSelectionStyles = StyleSheet.create({
  sportsSelectionContainer: {
    flexDirection: "row"
  },
  sportItemStyle: {
    justifyContent: "space-around"
  }
});
