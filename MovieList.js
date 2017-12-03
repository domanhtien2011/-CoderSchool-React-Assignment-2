//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// create a component
class MovieList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.movies}
        keyExtractor={movie => movie.id}
        renderItem={movieItem => <Text>{movieItem.item.title}</Text>}
      />
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default MovieList;
