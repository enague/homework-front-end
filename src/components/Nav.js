import React, { Component } from 'react';


class Nav extends Component {
 constructor(props) {
  super(props);
  this.state = {
   value: '',
  }

  this.handleChange = this.handleChange.bind(this);
  this.clear = this.clear.bind(this);
 }

 //handles new input and changes value in state for query for API
 handleChange(event) {
    this.setState({value: event.target.value});
 }

 //used as a callback to clear value in state after call to API is made
 clear() {
  this.setState({
      value: ''
  })
}


 render() {
  return (
   <div className="Nav">
    <nav className="navbar navbar-expand-lg bg-custom">
     <div className='container'>
      <div className="form-inline">
       <span  onClick={() => {window.location.reload()}} className="navbar-brand" id='logo'>
        <img  src='https://media.giphy.com/media/xUA7aZazfrMokbeb0k/giphy.gif' 
              alt='logo_gif' 
              style={{ height: '55px', width: '55px'}}></img>
         Giffy 
       </span>
      </div>
      <button    className="navbar-toggler"
                 type="button" 
                 data-toggle="collapse" 
                 data-target="#navbarTogglerDemo01" 
                 aria-controls="navbarTogglerDemo01" 
                 aria-expanded="false" 
                 aria-label="Toggle navigation">
           <i className="fas fa-bars"></i>
       </button>
      <div style={{display: 'flex', cursor: 'pointer'}}>
       <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <div  className="form-inline">
         <input className="form-control mr-sm-2" 
                id='search_bar' 
                type="text"  
                value={this.state.value} 
                onChange={this.handleChange} 
                placeholder='Search GIFS...' 
                aria-label="Search"/>
         <button onClick={() => {this.props.onSearch(this.state.value, this.clear), this.props.clearLanding()}} 
                 className="btn btn-outline-primary my-2 my-sm-0" type="submit">
          <i className="fas fa-search"></i>
         </button>
         <div className="form-inline">
          <span onClick={() => {this.props.onSearch('Entertainment', this.clear), this.props.clearLanding()}} className='nav_links'>
           Entertainment
          </span>
          <span onClick={() => {this.props.onSearch('Sports', this.clear), this.props.clearLanding()}} className='nav_links'>
           Sports
          </span>
         <span onClick={() => {this.props.onSearch('Funny', this.clear), this.props.clearLanding()}} 
               className='nav_links'>
            Funny
         </span>
         <i onClick={() => {this.props.seeFavorites(), this.props.clearLanding()}} 
            style={{padding: '10px', color: 'red'}} 
            id='nav_heart' 
            className="fas fa-heart fa-2x"></i>
         </div>
        </div>
       </div>
      </div>
     </div>
    </nav>
   </div>
  )
 }

}


export default Nav;

