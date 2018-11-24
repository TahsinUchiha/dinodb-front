import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import UserForm from './Read/UserForm.js'
// import Home from './HomePage/Home.js';
import HomeMain from './HomePage/HomeMain.js';
import axios from 'axios';
import CreateUsers from './Create/CreateUsers.js';
import DeleteUsers from './Delete/DeleteUsers.js'
import CreateDinos from './Create/CreateDinos.js';
import DeleteDinos from './Delete/DeleteDinos.js';
import DinoForm from './Read/DinoForm.js';


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
      <CreateUsers/>
      <CreateDinos/>
      <HomeMain/>
      <UserForm/>
      <DeleteUsers/>
     <DeleteDinos/>
     <DinoForm/>
      

<br />
<br />
      <footer>
        <p>
          Made by: Tahsin 
        </p>
        <p>
          Contact me : {" "}
        <a href="mailto:alton255@yahoo.co.uk">Here </a>
        </p>

      </footer>

      </div>
    );
  }
}



export default App;
