import React, { Component } from 'react';
import axios from 'axios'
import '../scss/index.scss';

import Nav from './Nav';
import Landing from './Landing';
import GiphList from './GiphList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
    this.getTrendingGifs = this.getTrendingGifs.bind(this);
  }

  componentDidMount() {
    this.getTrendingGifs();
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

  render() {
    return (
      <div className="App">
       <Nav />
       <Landing />
       <GiphList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default App;
