import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/App.css';

export default class App extends Component {
  render(){
    return(
      <div className="BaseLayout">
      <div><Link to='/'>Home Page</Link></div>
      <div><Link to='/portfolio'>Portfolio</Link></div>
      <div><Link to='/about'>About</Link></div>

      {this.props.children}
      </div>
    )
  }
}
