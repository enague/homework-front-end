import React, { Component } from 'react';
import Slider from 'react-slick';
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import { GiphCarousel } from './Giph';


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
   slidesPerRow: 2,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 5000,
   cssEase: 'linear',
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const gifs = this.props.gifs;
  return (
   <div style={{padding: '30px'}} className='container'>
    <h3>{this.props.title}</h3> <br />
     {gifs.length > 0 && 
     <Slider {...settings}>
       {gifs.map((gif,i) => (
           <div>
            <GiphCarousel id={gif[0]} clicked={this.props.clicked} gif={gif[1]} key={i}/>
           </div>
       ))}
     </Slider>}
  </div>
  )
 }
}


export default GiphList;