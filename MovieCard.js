//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
class MovieCard extends Component {
  render() {
    const img = {
      uri: `https://image.tmdb.org/t/p/w1000_and_h563_bestv2${this.props.poster_path}`
    };

    console.log(img);

    return (
      <View style={styles.container}>
        <Image style={{width: 300, height: 150}} source={img} />
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

//make this component available to the app
export default MovieCard;
