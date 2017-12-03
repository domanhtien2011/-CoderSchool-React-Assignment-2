//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MovieCard from "./MovieCard";

// create a component
class MovieList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.movies}
          keyExtractor={movie => movie.id}
          renderItem={movieItem => <MovieCard {...movieItem.item} />}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});

//make this component available to the app
export default MovieList;
