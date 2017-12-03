import React from "react";
import {StyleSheet, Text, View, TouchableHighlight} from "react-native";
import TEST_DATA from "./data.json";
import MovieList from "./MovieList";
import MovieProfile from "./MovieProfile";
import {StackNavigator} from "react-navigation";

const API_KEY = "b0e53c16a13148a3ffc087078f52673f";

const Routes = StackNavigator({
  MovieList: {
    screen: MovieList,
    MovieProfile: {
      screen: MovieProfile
    }
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchWithPage = this
      .fetchWithPage
      .bind(this);
    this.loadMore = this
      .loadMore
      .bind(this);
    this.state = {
      movies: [],
      loading: false,
      page: 1
    };
  }

  fetchWithPage(page) {
    this.setState({
      loading: true
    }, () => {
      fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${page}`)
        .then(data => data.json())
        .then(json => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(json);
            }, 2200);
          });
        })
        .then(json => {
          const mSet = new Set([
            ...this
              .state
              .movies
              .map(m => m.id)
          ]);
          const plusSet = json
            .results
            .filter(m => !mSet.has(m.id));
          const newResults = this
            .state
            .movies
            .concat(plusSet);
          this.setState({movies: newResults, loading: false});
        });
    });
  }

  componentWillMount(props) {
    this.fetchWithPage(1);
  }

  loadMore() {
    const NewPage = this.state.page + 1;
    this.setState({
      page: NewPage
    }, () => this.fetchWithPage(NewPage));
  }

  render() {
    return (<Routes
      screenProps={{
      movies: this.state.movies,
      loading: this.state.loading,
      loadMore: this.loadMore
    }}/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
