import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";

const users = [
  {
    name: "Reubin",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  }
];

export default class ChatListScreen extends Component {
  static navigationOptions = {
    title: "Chats"
  };

  render() {
    return (
      <List>
        <FlatList
          data={users}
          renderItem={this.renderChatCard}
          keyExtractor={item => item.name}
        />
      </List>
    );
  }

  renderChatCard(user) {
    return (
      <ListItem
        roundAvatar
        title={user.name}
        subtitle={user.subtitle}
        avatar={user.avatar}
      />
    );
  }
}
