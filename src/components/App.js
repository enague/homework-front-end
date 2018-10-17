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
      reveal_landing: true,
      gifs: [],
      searched: [],
      query: null,
      activeItem: {
        title: '',
        url: ''
      }
    };

    this.getTrendingGifs = this.getTrendingGifs.bind(this);
    this.searchGifs = this.searchGifs.bind(this);
    this.getActiveItemInfo = this.getActiveItemInfo.bind(this);
  }

  componentDidMount() {
    this.getTrendingGifs();
    this.searchGifs('random');
  }

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

  searchGifs(value, callback) {
    this.setState({
      query: value
    })

    let words = value.split(' ').join('+')
    console.log('words', words)
    axios.get('http://localhost:8080/search', {
      params: {
        words: words
      }
    })
    .then(res => {
      let searched = res.data
      this.setState({
        searched
      })
      callback()
    })
    .catch(err => {
        console.log(err)
        callback()
    })
  }


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

  render() {
    return (
      <div className="App">
       <Nav onSearch={this.searchGifs}/>
       {this.state.reveal_landing ? <Landing /> : null}
       <GiphDetails details={this.state.activeItem}/>
       <GiphList clicked={this.getActiveItemInfo} gifs={this.state.gifs} title={'Trending Now...'}/>
       <GiphList clicked={this.getActiveItemInfo} gifs={this.state.searched} title={`Searched for ${this.state.query}...`}/>
       <Footer />
      </div>
    )
  }
}

export default App;
