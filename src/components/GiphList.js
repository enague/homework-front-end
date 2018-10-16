import React from 'react';

import Giph from './Giph';

const GiphList = (props) => (
    <div className='container'>
     {props.gifs.map((gif,i) => (
         <Giph gif={gif} key={i}/>
     ))}
    </div>
)

export default GiphList;