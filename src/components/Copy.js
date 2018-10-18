import React from 'react';

//Presentational component to display available links for GIF from API
export const Link = (props) => (
    <div className='copy'>
     <h1>Links</h1>
     <div className='row'>
      <label>Short Link</label>
      <input defaultValue={props.gif.short_link}></input>
     </div>
     <div className='row'>
      <label>GIF Link</label>
      <input defaultValue={props.gif.url}></input>
     </div>
    </div>
)

//Presentational component to display available media from API
export const Media = (props) => (
    <div className='copy'>
     <h1>Media</h1>
     <div className='row'>
      <label>Social</label>
      <input defaultValue={props.gif.social}></input>
     </div>
     <div className='row'>
      <label>MP4</label>
      <input defaultValue={props.gif.mp4}></input>
     </div>
     <div className='row'>
      <label>Small</label>
      <input defaultValue={props.gif.small}></input>
     </div>
    </div>
)

//Presentational component to display available embed link from API
export const Embed = (props) => (
    <div className='copy'>
     <h1>Embed</h1>
     <div className='row'>
      <label>Description</label>
      <input defaultValue={props.gif.url}></input>
     </div>
    </div>
)


