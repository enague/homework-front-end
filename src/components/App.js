import React, { Component } from 'react';
import axios from 'axios'
import '../scss/index.scss';

import Nav from './Nav';
import Landing from './Landing';
import GiphList from './GiphList';
import Footer from './Footer';
import GiphDetails from './GiphDetails';
import Searched from './Searched';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trending: Array(25).fill(['id','https://media.giphy.com/media/3og0IKYORMdd5s3HDq/giphy.gif']),
      searched: [],
      visibleGifs: [],
      default: Array(25).fill(['id','https://media.giphy.com/media/3og0IKYORMdd5s3HDq/giphy.gif']),
      hasMore: true,
      reveal_favorites: false,
      reveal_landing: true,
      reveal_searched: true,
      favorites: [],
      query: null,
      activeItem: {}
    };

    this.getTrendingGifs = this.getTrendingGifs.bind(this);
    this.searchGifs = this.searchGifs.bind(this);
    this.getActiveItemInfo = this.getActiveItemInfo.bind(this);
    this.favoriteGif = this.favoriteGif.bind(this);
    this.seeFavorites = this.seeFavorites.bind(this);
    this.clearLanding = this.clearLanding.bind(this);
    this.seeMoreGifs = this.seeMoreGifs.bind(this);
    this.getMoreGifs = this.getMoreGifs.bind(this);
  }

  //when component mounts, get trending gifs to load into carousel and query trending gifs to load into searched gifs
  componentDidMount() {
    this.getTrendingGifs();
    this.searchGifs('trending');
  }

  //Asks server to get all trending gifs urls to store in state
  getTrendingGifs() {
    let loadingArr = this.state.searched.fill(['id','https://media.giphy.com/media/3og0IKYORMdd5s3HDq/giphy.gif'])
    this.setState({
      trending: loadingArr
    })

    axios.get('http://localhost:8080/trending')
    .then(res => {
      let gifs = res.data
      this.setState({
        trending: gifs
      });
    })
    .catch(err => {
      console.log(err)
    })
  }

  //Asks server to get all gifs based on a query from user
  //When component mounts, I display a GraphList component for queries for 'entertainment' and 'sports'
  searchGifs(value, callback) {
    this.setState({
      query: value,
      reveal_favorites: false,
      reveal_searched: false
    });

    let words = value.split(' ').join('+')
    axios.get('http://localhost:8080/search', {
      params: {
        words: words
      }
    })
    .then(res => {
      let searched = res.data
      let loadingArr = Array(20).fill(['id','https://media.giphy.com/media/3og0IKYORMdd5s3HDq/giphy.gif'])

      this.setState({
        reveal_searched: true,
        visibleGifs: loadingArr
      })

      this.setState({
        searched
      });

      let length = this.state.visibleGifs.length;
      if(length < 25) {
        let visible = this.state.searched.slice(0,25);

        this.setState({
          visibleGifs: visible
        });
      } 

      if(callback){
        callback()
      }
    })
    .catch(err => {
        console.log(err)
        callback()
    })
  }

  //function to call the getMoreGifs to load more gifs from searched into visible gifs
  seeMoreGifs(){
    if (this.state.visibleGifs.length >= 100) {
      this.setState({ hasMore: false });
      return;
    }

    setTimeout(() => {
      this.getMoreGifs()
    }, 500);
  }

  //searched array has all the available gifs from API so we grab the ones 
  //that aren't shown to load them into visible array
  getMoreGifs() {
    let length = this.state.visibleGifs.length;
    let more = this.state.searched.slice(length, length + 10);
    let visible = this.state.visibleGifs.concat(more)

    this.setState({
      visibleGifs: visible
    }); 
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
    let id = info[0];
    let isInFavorites = false;
    let favorited = this.state.favorites;

    for(let i=0; i < favorited.length; i++) {
      if(favorited[i][0] === id) {
        isInFavorites = true;
        favorited.splice(i, 1);
        this.setState({
          favorites: favorited
        });

        return false;
      }
    }
    
    if(!isInFavorites) {
      let favorites = [
        ...this.state.favorites, info
      ]
  
      this.setState({
        favorites
      })
      return true;
    }

  }

  //Allows user to see all their favorited gifs
  seeFavorites() {
    this.setState(state => ({
      reveal_favorites: !state.reveal_favorites
    }));

    this.setState(state => ({
      reveal_searched: !state.reveal_searched
    }));
  }

  clearLanding(){
    this.setState({
      reveal_landing: false
    })
  }



  render() {
    return (
      <div className="App">
       <Nav clearLanding={this.clearLanding} seeFavorites={this.seeFavorites} onSearch={this.searchGifs}/>
       {this.state.reveal_landing ? <Landing /> : null}
       <GiphDetails favorited={this.favoriteGif} details={this.state.activeItem}/>
       <GiphList clicked={this.getActiveItemInfo} gifs={this.state.trending} title={'Trending Now...'}/>
       {this.state.reveal_favorites ? <Searched seeMoreGifs={this.seeMoreGifs} clicked={this.getActiveItemInfo} gifs={this.state.favorites} title={`Favorites...`}/> : null}
        {this.state.reveal_searched ? <Searched seeMoreGifs={this.seeMoreGifs} hasMore={this.state.hasMore} clicked={this.getActiveItemInfo} gifs={this.state.visibleGifs} title={`Searched for ${this.state.query}...`} /> :
        <Searched seeMoreGifs={this.seeMoreGifs} hasMore={this.state.hasMore} clicked={this.getActiveItemInfo} gifs={this.state.default} /> }
       <Footer onSearch={this.searchGifs}/>
      </div>
    )
  }
}

export default App;
