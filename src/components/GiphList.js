import React, { Component } from 'react';
import Slider from 'react-slick';
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";



import Giph from './Giph';


class GiphList extends Component {
 constructor(props) {
  super(props);
  this.state={};
 }

 render() {
  //settings for the React-slick carousel
  const settings = {
   centerMode: true,
   infinite: true,
   centerPadding: "60px",
   slidesToShow: 3,
   speed: 500,
   rows: 2,
   slidesPerRow: 2,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 5000,
   cssEase: 'linear'
  };
  return (
   <div style={{padding: '30px'}} className='container'>
    <h1>{this.props.title}</h1> <br />
     {this.props.gifs.length > 0 && 
     <Slider {...settings}>
       {this.props.gifs.map((gif,i) => (
           <div>
            <Giph id={gif[0]} clicked={this.props.clicked} gif={gif[1]} key={i}/>
           </div>
       ))}
     </Slider>}
  </div>
  )
 }
}


export default GiphList;