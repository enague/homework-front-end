import React from 'react';

////Presentational component to display the gif with ability to click gif
//Can activate modal with all info of that specific GIPH
const Giph = (props) => (
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

export default Giph;