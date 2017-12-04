//import liraries
import React, { Component } from "react";
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";

// create a component
class MovieCard extends Component {
  render() {
    const img = {
      uri: `https://image.tmdb.org/t/p/w342${
        this.props.poster_path
      }`
    };

    return (
      <TouchableHighlight onPress={this.props.loadProfile}>
        <View style={styles.container}>
          <Image
            style={styles.thumbnail}
            source={img}
          />
          <Text style={styles.title}>
            {this.props.title}
          </Text>
          <Text style={styles.sub_title}>
            Released: {this.props.release_date}   |   Rate: {this.props.vote_average}
          </Text>
          <Text style={styles.divider}></Text>
        </View>
      </TouchableHighlight>
    );
  }
}

// define your styles

var width = Dimensions.get('window').width; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 15,
    paddingLeft: width*.05
  },
  thumbnail: {
    width: width * .9,
    height: 180,
    borderRadius: 8,
    shadowColor: 'rgba(0,0,0,.07)',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: .9,
    shadowRadius: 5
  },
  title: {
    width: width * .9,
    marginTop: 10,
    fontSize: 18,
    color: '#7f8c8d',
    fontWeight: '500'
  },
  sub_title: {
    width: width * .9,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12,
    color: '#7f8c8d'
  },
  divider: {
    width: 50,
    height: 1,
    backgroundColor: '#7f8c8d',
    marginTop: 5,
    marginBottom: 5
  }
});

//make this component available to the app
export default MovieCard;
