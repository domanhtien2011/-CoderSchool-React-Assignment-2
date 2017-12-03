//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// create a component
class MovieProfile extends Component {
  render() {
    const props = this.props.navigation.state.params;
    const img = {
      uri: `https://image.tmdb.org/t/p/w1000_and_h563_bestv2${
        props.poster_path
      }`
    };
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: 300,
            height: 150
          }}
          source={img}
        />
        <View>
          <Text style={styles.boldStyle}>Title: {props.title}</Text>
          <Text style={styles.boldStyle}>Summary: {props.overview}</Text>
          <Text style={styles.boldStyle}>
            Average Rating: {props.vote_average}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  boldStyle: {
    fontWeight: "bold"
  }
});
//make this component available to the app
export default MovieProfile;
