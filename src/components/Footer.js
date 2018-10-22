import React from 'react';

//Presentational component to allow user to go to other pages on the site
const Footer = (props) => (
    <div className='footer'>
     <div className='container'>
      <div className='row'>
       <div className='col-sm'>
        <h2>Categories</h2>
         <div>
          <div className='footer_links' onClick={() => {props.onSearch('Sports')}}>Sports</div>
          <div className='footer_links' onClick={() => {props.onSearch('Entertainment')}}>Entertainment</div>
          <div className='footer_links' onClick={() => {props.onSearch('Trending')}}>Trending</div>
          <div className='footer_links' onClick={() => {props.onSearch('Random')}}>Random</div>
         </div>
       </div>
       <div className='col-sm'>
        <h2>About Us</h2>
        <div>
          <div className='footer_links'>Careers</div>
          <div className='footer_links'>FAQ</div>
          <div className='footer_links'>Contacts</div>
         </div>
       </div>
       <div className='col-sm'>
        <h2>Follow Us</h2>
        <div className='social_media'>
        <i className="fab fa-twitter fa-2x"></i>
        <i className="fab fa-facebook fa-2x"></i>
        <i className="fab fa-instagram fa-2x"></i>
        </div>
       </div>
      </div>
     </div>
    </div>
)

export default Footer;