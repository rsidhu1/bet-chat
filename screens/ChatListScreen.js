import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ChatListScreen extends Component {
  static navigationOptions = {
      title: 'Chats',
  }

  render() {
    return (
      <View>
        <Text>This is the chat list screen</Text>
      </View>
    );
  }
}
