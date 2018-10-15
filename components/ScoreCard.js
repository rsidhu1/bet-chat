import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card, Divider } from "react-native-elements";

const games = [
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
      team1: "New England",
      avatar1: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score1: 1,
      team2: "Kansas City",
      avatar2: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score2: 2,
      id: 2
    }
  },
  {
    game: {
      team1: "New England",
      avatar1: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score1: 1,
      team2: "Kansas City",
      avatar2: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score2: 2,
      id: 3
    }
  },
  {
    game: {
      team1: "New England",
      avatar1: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score1: 1,
      team2: "Kansas City",
      avatar2: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score2: 2,
      id: 4
    }
  },
  {
    game: {
      team1: "New England",
      avatar1: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score1: 1,
      team2: "Kansas City",
      avatar2: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      score2: 2,
      id: 5
    }
  },
  
];

export default class ScoreCard extends Component {
  constructor() {
    super();
  }
  render() {
    return <View style={styles.container}>{this.renderScoreCard(games)}</View>;
  }

  renderScoreCard(games) {
    return (
      <ScrollView style={styles.container}>
        {games.map((u, i) => {
          return (
            <Card>
              <View>
                <View style={styles.cardStyle} key={i}>
                  <Image resizeMode="cover" source={{ uri: u.game.avatar }} />
                  <Text>{u.game.team1}</Text>
                  <Text>{u.game.score1}</Text>
                </View>

                <Divider style={styles.dividerStyle} />

                <View style={styles.cardStyle}>
                  <Image resizeMode="cover" source={{ uri: u.game.avatar }} />
                  <Text>{u.game.team2}</Text>
                  <Text>{u.game.score2}</Text>
                </View>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //alignItems: "stretch"
  },
  cardStyle: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  dividerStyle: {
    marginTop: 5,
    marginBottom: 5
  }
});
