import React, { Component } from 'react';
import '../scss/index.scss';

import Nav from './Nav';
import Landing from './Landing';
import GiphList from './GiphList';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav />
       <Landing />
       <GiphList />
      </div>
    )
  }
}

export default App;
