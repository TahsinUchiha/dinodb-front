import React from 'react';
import axios from "axios";
import info from '.././Images/info.jpg'
import {url} from "../App";

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: "" };
      }



getUser = (e) => {
  e.preventDefault();

  const userID = e.target.elements.username.value;

  if (userID) {
  axios.get(url+`:8080/dinodb/api/dinosaur/getUsers/${userID}`)
  .then((res) => {
    const fname = res.data.firstName;
    const lname = res.data.lastName;
    const uname = res.data.userName;
    // console.log(name)
    this.setState({fname});
    this.setState({lname});
    this.setState({uname});
  })
  
  .catch(error => console.log(error));
} else return;
};

render () {
return (
    <div>
    <form onSubmit = {this.getUser}>
        <input type = "text" name="username"  placeholder="Search Users"/>
        <button>
            Search User
        </button>

        {this.state.fname ? <p> First Name of the User : {this.state.fname} </p>: <p> Please Enter an ID</p>}
        {this.state.lname ? <p> Last Name of the User : {this.state.lname} </p>: <p></p>}
        {this.state.uname ? <p> UserName : {this.state.uname} </p>: <p></p>}
        
<img src={info}/>
    </form>
    </div>
);
}
}
export default UserForm;