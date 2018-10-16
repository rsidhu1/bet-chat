import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import SportSelection from "../components/SportSelectionGroup";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Scores"
  };

  render() {
    return (
      <View style={styles.container}>
        <SportSelection />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  divderStyle: {
    backgroundColor: "black"
  }
});
