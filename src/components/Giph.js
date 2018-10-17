import React from 'react';


const Giph = (props) => (
    <div>
        <img onClick={() => {props.clicked(props.id)}} data-toggle="modal" data-target="#exampleModalCenter" className='giph' alt='gif' src={props.gif}></img>
    </div>
)

export default Giph;