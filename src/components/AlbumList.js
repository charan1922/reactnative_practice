import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

class AlbumList extends Component {
state = {
        albums: []
      }

 
  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    this.state.albums.map(album => <Text>{album.list}</Text>);
  }

  render() {
  return (
  <View>
  {this.renderAlbums()}
  </View>
);
  }
}

export default AlbumList;
