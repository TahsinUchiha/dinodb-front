import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Home from './HomePage/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App" style = {{maxWidth: "1000px", margin: "auto"}}>
      <Home/>
      </div>
    );
  }
}

export default App;
