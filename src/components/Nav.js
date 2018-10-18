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
      <nav className="navbar navbar bg-custom">
      <div className='container'>
       <div className='logo'>
        <img src='https://media.giphy.com/media/3ohc0W4869hlSOmTrG/giphy.gif' alt='rainbow_gif' style={{ height: '55px', width: '55px'}}></img>
        <span className="navbar-brand" style={{fontSize: '30px', fontWeight: 'bold'}}>Giffy </span>
       </div>
       <div  className="form-inline">
        <input className="form-control mr-sm-2" type="text"  value={this.state.value} onChange={this.handleChange} placeholder='Search GIFS...' aria-label="Search"/>
        <button onClick={() => {this.props.onSearch(this.state.value, this.clear)}}className="btn btn-outline-primary my-2 my-sm-0" type="submit">
         <i className="fas fa-search"></i>
        </button>
        <i onClick={() => {this.props.seeFavorites()}} style={{padding: '10px', color: 'red'}} id='nav_heart' className="fas fa-heart fa-2x"></i>
       </div>
       </div>
      </nav>
    </div>
  )
 }

}


export default Nav;

