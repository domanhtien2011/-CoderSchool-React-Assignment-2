import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Dimensions,
  NetInfo
} from "react-native";
import TEST_DATA from "./data.json";
import MovieList from "./MovieList";
import MovieProfile from "./MovieProfile";
import { StackNavigator, Header } from "react-navigation";

const API_KEY = "b0e53c16a13148a3ffc087078f52673f";

const Routes = StackNavigator({
  MovieList: {
    screen: MovieList,
    navigationOptions: {
      headerStyle: {display:"none"},
    }
  },
  MovieProfile: {
    screen: MovieProfile,
    navigationOptions: ({ navigation }) => {
      title: `${navigation.state.params.title}`
    }
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchWithPage = this.fetchWithPage.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.state = {
      search: "",
      movies: [],
      loading: false,
      page: 1,
      netInfo: false
    };
  }

  fetchWithPage(page) {
    this.setState(
      {
        loading: true
      },
      () => {
        fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${
            API_KEY
          }&page=${page}`
        )
          .then(data => data.json())
          .then(json => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(json);
              }, 2200);
            });
          })
          .then(json => {
            const mSet = new Set([...this.state.movies.map(m => m.id)]);
            const plusSet = json.results.filter(m => !mSet.has(m.id));
            const newResults = this.state.movies.concat(plusSet);
            this.setState({ movies: newResults, loading: false });
          })
          .catch(function(error) {
            console.log(
              "There has been a problem with my fetch operation: " +
                error.message
            );
            throw error;
          });
      }
    );
  }

  componentWillMount(props) {
    NetInfo.addEventListener('connectionChange', (connectionInfor) =>{
      connectionInfor ? this.fetchWithPage(1) : alert('Sorry, please check your connection!!!')
    })
  }

  loadMore() {
    const NewPage = this.state.page + 1;
    this.setState(
      {
        page: NewPage
      },
      () => this.fetchWithPage(NewPage)
    );
  }

  updateSearch(text) {
    this.setState({ search: text });
  }

  render() {
    let filteredMovies = this.state.movies.filter(movie => {
      return (
        movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Routes
          screenProps={{
            movies: filteredMovies,
            loading: this.state.loading,
            loadMore: this.loadMore,
            updateSearch: this.updateSearch.bind(this)
          }}
        />
      </View>
    );
  }
}

var width = Dimensions.get('window').width; 

const styles = StyleSheet.create({
  appName: {
    width: width * 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 50
  }
});
