import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Giph } from './Giph';

const style = {
 display: 'flex',
 flexWrap: 'wrap',
 padding: '54px 54px 90px',
 display: 'flex',
 justifyContent: 'center',
}

class Searched extends Component {
 constructor(props) {
  super(props);
  this.state={};
 }
 render() {
  return (
  <div>
    {this.props.title === "Searched for trending..." ? null : 
    <div  className='container'>
     <h3>{this.props.title}</h3>
    </div>}
    <div >
    <InfiniteScroll
          style={style}
          dataLength={this.props.gifs.length}
          next={this.props.seeMoreGifs}
          hasMore={this.props.hasMore}
          loader={
           <div>
            <br />
            <img className='loader' src={'https://media.giphy.com/media/5AtXMjjrTMwvK/giphy.gif'}></img>
           </div>
          }
          height={800}
        >
        {this.props.gifs.map((gif,i) => (
          <div>
          <Giph id={gif[0]} clicked={this.props.clicked} gif={gif[1]} key={i}/>
          </div>
        ))}
     </InfiniteScroll>
    </div>
  </div>
  )
 }
}


export default Searched;