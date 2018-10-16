import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card, Divider } from "react-native-elements";

export default class ScoreCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;

    return <View style={styles.container}>{this.renderScoreCard(data)}</View>;
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
