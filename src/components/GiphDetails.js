import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link,Media,Embed } from './Copy';
import { Success, Failure } from './FavAlert';


class GiphDetails extends Component {
 constructor(props) {
  super(props);
  this.state ={
   reveal_gif: true,
   reveal_links: false,
   reveal_media: false,
   reveal_embed: false,
   was_favorited: false,
   was_notfavorited: false,
  }
  this.reveal = this.reveal.bind(this);
  this.clear = this.clear.bind(this);
 }

//Reusable function to see which Copy component to render based on state
 reveal(type) {
  if(type ==='links') {
   this.setState({
    reveal_gif: false,
    reveal_media: false,
    reveal_embed: false,
    reveal_links: true
   });
  }

  if(type ==='media') {
   this.setState({
    reveal_gif: false,
    reveal_links: false,
    reveal_embed: false,
    reveal_media: true
   });
  }

  if(type ==='embed') {
   this.setState({
    reveal_gif: false,
    reveal_media: false,
    reveal_links: false,
    reveal_embed: true
   });
  }
 }

 //Used to reset state of modal to display GIPH
 clear() {
  this.setState({
    reveal_gif: true,
    reveal_media: false,
    reveal_links: false,
    reveal_embed: false,
    was_favorited: false,
    was_notfavorited: false
  });
 }

 //Used to split title from the API
 titleExists(title){
   if(title){
    let initialTitle = title.toUpperCase().split('BY');
    return initialTitle[0];
   } else {
     return 'GIFFY PRESENTS...';
   }
 }

 //show Alert to user if gif was favorited
 showAlert(value) {
  //if value false show failure
  //if value true show success
  if(value) {
    this.setState({
      was_favorited: true,
      was_notfavorited: false
    });
  } else {
    this.setState({
      was_favorited: false,
      was_notfavorited: true
    });
  }
 }
 

 render() {
  const details = this.props.details;
  return (
   <div className='modal_style'>
     <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     <div className="modal-dialog modal-dialog-centered" role="document">
         <div className="modal-content">
         <div className="modal-header">
          <div className='user_avatar'>
           <img className='user_modal'alt='user' src={details.avatar}></img>
           <h2 style={{padding: '5px'}} >{details.user}</h2>
          </div>
          <button onClick={() => {this.clear()}}type="button" className="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
          </button>
         </div>
         <div className="modal-body">
           <div onClick={() => {this.clear()}} id='modal_title'>
             <div>{this.titleExists(details.title)}</div>
             <div>BY {details.user}</div>
           </div>
           {this.state.was_favorited ? <Success /> : null}
           {this.state.was_notfavorited ? <Failure /> : null}
           <div className='row'>
            <div className='col-sm'>
             {this.state.reveal_gif ? <img style={{height: '300px', width: '300px'}} alt='gif' src={details.url}></img> : null}
             {this.state.reveal_links ? <Link gif={details}/> : null}
             {this.state.reveal_media ? <Media gif={details}/> : null}
             {this.state.reveal_embed ? <Embed  gif={details}/> : null}
            </div> 
            <div className='col-sm' id='modal_links'>
             <div>
              <i onClick={() => {this.showAlert(this.props.favorited([details.id,details.url]))}} className="far fa-heart"></i>
              Favorite
              </div>
             <div onClick={() => {this.reveal('links')}}>
              <i className="fas fa-link"></i>
              Copy Link
             </div>
             <div onClick={() => {this.reveal('media')}}>
             <i className="fas fa-share-square"></i>
              Media
             </div>
             <div onClick={() => {this.reveal('embed')}}>
              <i className="fas fa-code"></i>
              Embed
             </div>
            </div> 
           </div>
          </div>
        </div>
       </div>
     </div>
    </div>
  )
 }
}

GiphDetails.propTypes = {
  reveal_gif: PropTypes.bool,
   reveal_links: PropTypes.bool,
   reveal_media: PropTypes.bool,
   reveal_embed: PropTypes.bool,
   was_favorited: PropTypes.bool,
   was_notfavorited: PropTypes.bool,
};
   

export default GiphDetails;