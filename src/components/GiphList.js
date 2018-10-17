import React from 'react';
// import Slider from 'react-slick';


import Giph from './Giph';

// let settings = {
//  dots: true,
//  infinite: true,
//  speed: 500,
//  slidesToShow: 1,
//  slidesToScroll: 1
// };

const GiphList = (props) => (
    <div style={{padding: '30px'}}>
     <div className='container'>
      <h1>{props.title}</h1> <br />
      <div className='trending'>
       {/* <Slider {...settings}> */}
        {props.gifs.map((gif,i) => (
            <Giph id={gif[0]} clicked={props.clicked} gif={gif[1]} key={i}/>
        ))}
        {/* </Slider> */}
       </div>
     </div>
    </div>
)


export default GiphList;