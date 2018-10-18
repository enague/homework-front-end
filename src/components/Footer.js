import React from 'react';

//Presentational component to allow user to go to other pages on the site
const Footer = () => (
    <div className='footer'>
     <div className='container'>
      <div className='row'>
       <div className='col-sm'>
        <h2>Categories</h2>
         <ul>
          <a>Sports</a>
          <a>Entertainment</a>
          <a>Trending</a>
          <a>Random</a>
         </ul>
       </div>
       <div className='col-sm'>
        <h2>About Us</h2>
        <ul>
          <a>Careers</a>
          <a>FAQ</a>
          <a>Contacts</a>
         </ul>
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
     <div style={{padding: '5px', fontSize: '12px', fontStyle: 'italic'}}><i className="far fa-copyright"></i> 2018 By Eric Nague. Proudly created by yours truly</div>
    </div>
)

export default Footer;