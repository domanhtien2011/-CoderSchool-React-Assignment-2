//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button, Dimensions } from "react-native";

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
          style={styles.poster}
          source={img}
        />
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            {props.title}
          </Text>
          <Text style={styles.sub_title}>
            Average Rating: {props.vote_average}   |   Released: {props.release_date}
          </Text>
          <Text style={styles.desc}>
            {props.overview} 
          </Text>
        </View>
        <View style={styles.button} >
          <Text style={styles.button_text}>Watch Now</Text>
        </View>
      </View>
    );
  }
}
var width = Dimensions.get('window').width; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff'
  },
  wrapper: {
    width: width * 1,
    paddingHorizontal: 15,
  },
  title: {
    width: width * .9,
    marginTop: 15,
    fontSize: 20,
    color: '#2c3e50',
    fontWeight: '500'
  },
  sub_title: {
    width: width * .9,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12,
    color: '#34495e'
  },
  desc: {
    marginTop: 15,
    color: '#7f8c8d',
    textAlign: 'justify'
  },
  poster: {
    width: width * 1,
    height: 300
  },
  button: {
    width: width - 30,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#f1c40f',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500'
  }
});
//make this component available to the app
export default MovieProfile;
