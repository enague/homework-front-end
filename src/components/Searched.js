import React, { Component } from 'react';

import { Giph } from './Giph';


class Searched extends Component {
 constructor(props) {
  super(props);
  this.state={};
 }

 render() {
  return (
   <div className='container'>
    <h3>{this.props.title}</h3>
    <div className='searched_box'>
     {this.props.gifs.map((gif,i) => (
         <div>
         <Giph id={gif[0]} clicked={this.props.clicked} gif={gif[1]} key={i}/>
         </div>
     ))}
    </div>
  </div>
  )
 }
}


export default Searched;