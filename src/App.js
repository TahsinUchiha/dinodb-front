import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import UserForm from './HomePage/UserForm.js'
// import Home from './HomePage/Home.js';
import HomeMain from './HomePage/HomeMain.js';
import axios from 'axios';

class App extends Component {
state = {
  name: null
}


getUser = (e) => {
  e.preventDefault();
  const userID = e.target.elements.username.value;

  if (userID) {

  axios.get(`http://localhost:8080/dinodb/api/dinosaur/getUsers/${userID}`)
  .then((res) => {
    const fname = res.data.firstName;
    const lname = res.data.lastName;
    const uname = res.data.userName;
    // console.log(name)
    this.setState({fname});
    this.setState({lname});
    this.setState({uname});
  })
} else return;
}

  render() {
    return (
      <div className="App" style = {{maxWidth: "1000px", margin: "auto"}}>
      
      <HomeMain/>
      <UserForm/>

      

      </div>
    );
  }
}



export default App;
