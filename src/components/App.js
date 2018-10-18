import React, { Component } from 'react';
import axios from 'axios'
import '../scss/index.scss';

import Nav from './Nav';
import Landing from './Landing';
import GiphList from './GiphList';
import Footer from './Footer';
import GiphDetails from './GiphDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      searched: [],
      entertainment: [],
      sports: [],
      reveal_favorites: false,
      favorites: [],
      query: null,
      activeItem: {}
    };

    this.getTrendingGifs = this.getTrendingGifs.bind(this);
    this.searchGifs = this.searchGifs.bind(this);
    this.getActiveItemInfo = this.getActiveItemInfo.bind(this);
    this.favoriteGif = this.favoriteGif.bind(this);
    this.seeFavorites = this.seeFavorites.bind(this);
  }

  componentDidMount() {
    this.getTrendingGifs();
    this.searchGifs('entertainment');
    this.searchGifs('sports');
    this.searchGifs('random');
  }

  //Asks server to get all trending gifs urls to store in state
  getTrendingGifs() {
    axios.get('http://localhost:8080/trending')
    .then(res => {
      let gifs = res.data
      this.setState({
        gifs
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  //Asks server to get all gifs based on a query from user
  //When component mounts, I display a GraphList component for queries for 'entertainment' and 'sports'
  searchGifs(value, callback) {
    this.setState({
      query: value
    })

    let words = value.split(' ').join('+')
    axios.get('http://localhost:8080/search', {
      params: {
        words: words
      }
    })
    .then(res => {
      let searched = res.data

      value === 'entertainment' ? this.setState({
        entertainment: searched
      }) : null

      value === 'sports' ? this.setState({
        sports: searched
      }) : null

      this.setState({
        searched
      })

      if(callback){
        callback()
      }
    })
    .catch(err => {
        console.log(err)
        callback()
    })
  }

  //Asks server to get necessary info about a gif based on a specific id 
  getActiveItemInfo(id) {
    axios.get('http://localhost:8080/active', {
      params: {
        id: id
      }
    })
    .then(res => {
      let activeItem = res.data
      console.log(activeItem)
      this.setState({
        activeItem
      })
    })
    .catch(err => {
        console.log(err)
    })
  }

  //Allows user to favorite gifs and store them in state
  favoriteGif(info) {
    let favorites = [
      ...this.state.favorites, info
    ]

    this.setState({
      favorites
    })
  }

  //Allows user to see all their favorited gifs
  seeFavorites() {
    this.setState(state => ({
      reveal_favorites: !state.reveal_favorites
    }));
  }

  render() {
    return (
      <div className="App">
       <Nav seeFavorites={this.seeFavorites} onSearch={this.searchGifs}/>
       <Landing />
       <GiphDetails favorited={this.favoriteGif} details={this.state.activeItem}/>
       {this.state.reveal_favorites ? <GiphList clicked={this.getActiveItemInfo} gifs={this.state.favorites} title={`Favorites...`}/> : null}
       <GiphList  clicked={this.getActiveItemInfo} gifs={this.state.searched} title={`Searched for ${this.state.query}...`}/>
       <GiphList clicked={this.getActiveItemInfo} gifs={this.state.gifs} title={'Trending Now...'}/>
       <GiphList clicked={this.getActiveItemInfo} gifs={this.state.entertainment} title={`Entertainment...`}/>
       <GiphList clicked={this.getActiveItemInfo} gifs={this.state.sports} title={`Sports...`}/>
       <Footer />
      </div>
    )
  }
}

export default App;
