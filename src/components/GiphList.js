import React from 'react';

import Giph from './Giph';

const GiphList = (props) => (
    <div style={{padding: '30px'}}>
     <div className='container'>
         <h1>{props.title}</h1> <br />

     <div className='trending'>
     {props.gifs.map((gif,i) => (
         <Giph gif={gif} key={i}/>
     ))}
     </div>
     </div>
    </div>
)

export default GiphList;