import React, { Component } from 'react';
import SearchAll from './SearchAll.js';
import './Home.css'



class Home extends React.Component {
  render() {

    return (
      <div>
        <ul className="homebar">
        <h1 className="title"><a>Dino-DataBase</a></h1>
        <li><a>All Dinosaur</a></li>
        <li><a>Register</a></li>
        <li><a>Add</a></li>
        <li><a>Login</a></li>
        <li><a>About</a></li>
        <li className="searchbar" style={{float:"right"}}><SearchAll /></li>
        </ul> 
      </div>

    );

  }

}

export default Home;