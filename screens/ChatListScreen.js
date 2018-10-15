import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import { List, ListItem } from "react-native-elements";
import { SearchBar } from "react-native-elements";

const users = [
  {
    name: "bob",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "bob Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "Chris Jackson1",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "bob Jackson2",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "bob Jackson3",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  }
];

export default class ChatListScreen extends Component {
  constructor() {
    super();
  }

  static navigationOptions = {
    title: "Chats"
  };

  renderRow({ item }) {
    return (
      <TouchableHighlight onPress={() => console.log("pressed")}>
        <ListItem
          roundAvatar
          title={item.name}
          subtitle={item.subtitle}
          avatar={{ uri: item.avatar_url }}
        />
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View>
        <SearchBar
          lightTheme
          icon={{ type: "font-awesome", name: "search" }}
          placeholder="Type Here..."
        />
        <List style={styles.listContainerStyle}>
          <FlatList
            data={users}
            renderItem={this.renderRow}
            keyExtractor={item => item.name}
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainerStyle: {
    flex: 1
  }
});
