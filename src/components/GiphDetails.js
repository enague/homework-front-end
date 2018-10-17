import React from 'react';


const GiphDetails = (props) => (
    <div>
     <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     <div className="modal-dialog modal-dialog-centered" role="document">
         <div className="modal-content">
         <div className="modal-header">
             <h5 className="modal-title" id="exampleModalCenterTitle">{props.details.title}</h5>
             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
             </button>
         </div>
         <div className="modal-body">
             <img style={{height: '200px', width: '200px'}} alt='gif' src={props.details.url}></img>
         </div>
         <div className="modal-footer">
             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
         </div>
         </div>
     </div>
     </div>
    </div>
)

export default GiphDetails;