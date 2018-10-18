import React from 'react';

import { Link,Media,Embed } from './Copy.js'


class GiphDetails extends React.Component {
 constructor(props) {
  super(props);
  this.state ={
   reveal_gif: true,
   reveal_links: false,
   reveal_media: false,
   reveal_embed: false
  }
  this.reveal = this.reveal.bind(this);
  this.clear = this.clear.bind(this);
 }


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

 clear() {
  this.setState({
    reveal_gif: true,
    reveal_media: false,
    reveal_links: false,
    reveal_embed: false
  })
 }

 render() {
  let initialTitle = this.props.details.title.toUpperCase().split('BY')
  let gifTitle = initialTitle[0]
  let user = initialTitle[1]

  return (
   <div className='modal_style'>
     <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     <div className="modal-dialog modal-dialog-centered" role="document">
         <div className="modal-content">
         <div className="modal-header">
             <button onClick={() => {this.clear()}}type="button" className="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
             </button>
         </div>
         <div className="modal-body">
           <div id='modal_title'>
             <div>{gifTitle}</div>
             <div>BY {user}</div>
           </div>
           <div className='row'>
            <div className='col-sm'>
             {this.state.reveal_gif ? <img style={{height: '300px', width: '300px'}} alt='gif' src={this.props.details.url}></img> : null}
             {this.state.reveal_links ? <Link gif={this.props.details}/> : null}
             {this.state.reveal_media ? <Media gif={this.props.details}/> : null}
             {this.state.reveal_embed ? <Embed  gif={this.props.details}/> : null}
            </div> 
            <div className='col-sm' id='modal_links'>
             <div>
             <i className="far fa-heart"></i>
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
             <div className='user_avatar'>
              <img className='user_modal'alt='user' src={this.props.details.avatar}></img>
              <div>{this.props.details.user}</div>
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
   

export default GiphDetails;