import React from 'react';


export const Link = (props) => (
    <div className='copy'>
     <h1>Links</h1>
     <div className='row'>
      <p>Short Link</p>
      <input defaultValue={props.gif.short_link}></input>
     </div>
     <div className='row'>
      <p>GIF Link</p>
      <input defaultValue={props.gif.url}></input>
     </div>
    </div>
)


export const Media = (props) => (
    <div className='copy'>
     <h1>Media</h1>
     <div className='row'>
      <p>Social</p>
      <input defaultValue={props.gif.social}></input>
     </div>
     <div className='row'>
      <p>MP4</p>
      <input defaultValue={props.gif.mp4}></input>
     </div>
     <div className='row'>
      <p>Small</p>
      <input defaultValue={props.gif.small}></input>
     </div>
    </div>
)
export const Embed = (props) => (
    <div className='copy'>
     <h1>Embed</h1>
     <div className='row'>
      <p>Description</p>
      <input defaultValue={props.gif.url}></input>
     </div>
    </div>
)


