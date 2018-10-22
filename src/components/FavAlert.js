import React from 'react';


export const Success = () => (
  <div className="alert alert-success alert-dismissible fade show" role="alert">
   <strong>Holy guacamole!</strong> You just added this GIF to your Favorites. Click the 
    <i style={{padding: '2px', color: 'red'}} 
       id='nav_heart' 
       className="fas fa-heart">
    </i> 
    at the top of the page to see all your favorites!
   <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
 </div>
)

export const Failure = () => (
 <div className="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Alright, we took this out of your favorites!</strong> 
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
   <span aria-hidden="true">&times;</span>
 </button>
</div>
)