import React, { Component } from 'react';
import './App.css';
import HomeMain from './HomeMain.js';


class App extends Component {
state = {
  name: null
}

  render() {
    return (
      <div className="App" style = {{maxWidth: "1200px", margin: "auto"}}>
      <HomeMain/>
      </div>
    );
  }
}



export default App;
