import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, Divider, ButtonGroup } from "react-native-elements";
import ScoreCard from "./ScoreCard";

const nfl = [
  {
    game: {
      team1: "New England",
      avatar1: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score1: 1,
      team2: "Kansas City",
      avatar2: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score2: 2,
      id: 1
    }
  },
  {
    game: {
      team1: "Phili",
      avatar1: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score1: 1,
      team2: "Green bay",
      avatar2: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score2: 2,
      id: 1
    }
  }
];

const nba = [
  {
    game: {
      team1: "Raptors",
      avatar1: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score1: 1,
      team2: "Golden state",
      avatar2: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score2: 2,
      id: 1
    }
  }
];

const nhl = [
  {
    game: {
      team1: "Toronto Maple Leafs",
      avatar1: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score1: 1,
      team2: "Boston Bruins",
      avatar2: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score2: 2,
      id: 1
    }
  },
  {
    game: {
      team1: "Montreal Canadiens",
      avatar1: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score1: 1,
      team2: "Edmonton Oilers",
      avatar2: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score2: 2,
      id: 1
    }
  }
];

const mlb = [
  {
    game: {
      team1: "Toronto Blue Jays",
      avatar1: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score1: 1,
      team2: "New York Yankees",
      avatar2: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score2: 2,
      id: 1
    }
  }
];

const sportsData = [nfl, nba, nhl, mlb];

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

  currentSport(index, data) {
    if (index == 0) {
      //render NFL
      return <ScoreCard data={data[0]} />;
    } else if (index == 1) {
      //render NBA
      return <ScoreCard data={data[1]} />;
    } else if (index == 2) {
      //render NHL
      return <ScoreCard data={data[2]} />;
    } else {
      //render MLB
      return <ScoreCard data={data[3]} />;
    }
  }

  render() {
    const buttons = ["NFL", "NBA", "NHL", "MLB"];
    const { selectedIndex } = this.state;

    return (
      <View>
        <ButtonGroup
          onPress={index => this.updateIndex(index)}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 25 }}
        />

        {this.currentSport(selectedIndex, sportsData)}
      </View>
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
