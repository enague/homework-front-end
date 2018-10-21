import React from 'react';

////Presentational component to display the gif with ability to click gif
//Can activate modal with all info of that specific GIPH
//can maximaize with hover
export const Giph = (props) => (
    <div>
        <img onClick={() => {props.clicked(props.id)}} 
            data-toggle="modal" 
            data-target="#exampleModalCenter" 
            className='giph' 
            alt='gif' 
            src={props.gif}>
         </img>
    </div>
)

////Presentational component to display the gif with ability to click gif
//Can activate modal with all info of that specific GIPH 
//cannot maximaize with hover
 export const GiphCarousel = (props) => (
    <div>
        <img onClick={() => {props.clicked(props.id)}} 
            data-toggle="modal" 
            data-target="#exampleModalCenter" 
            className='giph_carousel' 
            alt='gif_carousel' 
            src={props.gif}>
         </img>
    </div>
)

