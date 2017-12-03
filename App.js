import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TEST_DATA from "./data.json";
import MovieList from "./MovieList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: TEST_DATA.results
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MovieList movies={this.state.movies} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
