import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Home from './HomePage/Home.js';
import HomeMain from './HomePage/HomeMain.js';

class App extends Component {
  render() {
    return (
      <div className="App" style = {{maxWidth: "1000px", margin: "auto"}}>
      
      <HomeMain/>
      </div>
    );
  }
}

export default App;
