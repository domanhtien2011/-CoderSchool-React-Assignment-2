import React from "react";
import {StyleSheet, Text, View} from "react-native";
import TEST_DATA from "./data.json";
import MovieList from "./MovieList";

const API_KEY = "b0e53c16a13148a3ffc087078f52673f";

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
      fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&${page}`)
        .then(data => data.json())
        .then(json => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(json);
            }, 2200);
          });
        })
        .then(json => {
          this.setState({movies: json.results, loading: false});
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
    }, () => this.fetchWithPage(newPage));
  }

  render() {
    return (
      <View style={styles.container}>
        <MovieList
          movies={this.state.movies}
          loading={this.state.loading}
          loadMore={this.state.loadMore}/>
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
