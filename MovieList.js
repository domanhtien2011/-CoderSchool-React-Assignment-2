//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TextInput
} from "react-native";
import MovieCard from "./MovieCard";
import MovieProfile from "./MovieProfile";

// create a component
class MovieList extends Component {
  render() {
    const screenProps = this.props.screenProps;
    const navigate = this.props.navigation.navigate;
    // the code above can be written as const {navigate} = this.props.navigation
    return (
      <View>
        <FlatList
          data={screenProps.movies}
          keyExtractor={movie => movie.id}
          renderItem={movieItem => (
            <MovieCard
              {...movieItem.item}
              loadProfile={() => {
                return navigate("MovieProfile", movieItem.item);
              }}
            />
          )}
          refreshing={screenProps.loading}
          onEndReached={screenProps.loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => (
            <View
              style={{
                flex: 1,
                padding: 10
              }}
            >
              <ActivityIndicator size="large" />
            </View>
          )}
        />
      </View>
    );
  }
}

export default MovieList;
