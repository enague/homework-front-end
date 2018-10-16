import React, { Component } from 'react';
import axios from 'axios'
import '../scss/index.scss';

import Nav from './Nav';
import Landing from './Landing';
import GiphList from './GiphList';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reveal_landing: true,
      gifs: [],
      searched: [],
      query: null,
    }
    this.getTrendingGifs = this.getTrendingGifs.bind(this);
    this.searchGifs = this.searchGifs.bind(this);
  }

  componentDidMount() {
    this.getTrendingGifs();
    this.searchGifs('dogs cats');
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
    console.log('it works')
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

  render() {
    return (
      <div className="App">
       <Nav onSearch={this.searchGifs}/>
       {this.state.reveal_landing ? <Landing /> : null}
       <GiphList gifs={this.state.gifs} title={'Trending Now...'}/>
       <GiphList gifs={this.state.searched} title={`Searched for ${this.state.query}...`}/>
       <Footer />
      </div>
    )
  }
}

export default App;
