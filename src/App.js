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
import Tables from './Read/DinoTable.js';
import UserTables from './Read/UserTable.js';
import UpdateUsers from './Update/UpdateUsers.js';
import UpdateDinos from './Update/UpdateDinos.js';


class App extends Component {
state = {
  name: null
}

  render() {
    return (
      <div className="App" style = {{maxWidth: "1000px", margin: "auto"}}>
      <HomeMain/>
      <CreateUsers/>
      <UserForm/>
      <UserTables/>
      <UpdateUsers/>
      <DeleteUsers/>
      <CreateDinos/>
      <DinoForm/>
      <Tables/>
      <UpdateDinos/>
      <DeleteDinos/>
  
      
    
   
    
   
   
   



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
