//import liraries
import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";

// create a component
class MovieProfile extends Component {
  render() {
    const props = this.props.navigation.state.params;
    const img = {
      uri: `https://image.tmdb.org/t/p/w1000_and_h563_bestv2${props.poster_path}`
    };
    return (
      <View>
        <Image
          style={{
          width: 300,
          height: 150
        }}
          source={img}/>
        <View>
          <Text>{props.title}</Text>
          <Text>{props.overview}</Text>
          <Text>{props.vote_average}</Text>
        </View>
      </View>
    );
  }
}

//make this component available to the app
export default MovieProfile;
