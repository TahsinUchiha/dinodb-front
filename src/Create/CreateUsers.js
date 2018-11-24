import React, { Component } from "react";
import axios from "axios";

import {
  FormControl,
  Form,
  Col,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";


class CreateUsers extends React.Component {
    addUser = e => {
      e.preventDefault();
  
      const userName = e.target.elements.username.value;
      const firstName = e.target.elements.firstname.value;
      const lastName = e.target.elements.lastname.value;

  
  
      if (
        userName &&
        firstName &&
        lastName 
      ) {
        axios
          .post(` http://localhost:8080/dinodb/api/dinosaur/addUser`, {
            userName,
            firstName,
            lastName
          })
          .then(res => {
            console.log(res);
            alert("User Added!")
          })
      } else {
        alert("Some fields need filling");
      }
    };
    // verification () {
    //     return (
    //     <div>
    //     <p>
    //     User has been Added!
    //     </p>
    //     </div>
    //     );
    // }
       

  
    render() {
      return (
          <div>
              <header>
          <h1>Add a User</h1>
        </header>
        <Form horizontal onSubmit={this.addUser}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Enter a UserName      : </p>
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                name="username"
                placeholder="bob123"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right">  Enter your First name : </p>
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                name="firstname"
                placeholder="Bob"
              />
            </Col>
          </FormGroup>

             <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right">  Enter your Last name : </p>
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                name="lastname"
                placeholder="Smith"
              />
            </Col>
          </FormGroup>

          
          <FormGroup>
            <Col smOffset={3} sm={5}>
              <Button bsStyle="info" type="submit">
                Add User
              </Button>
            </Col>
          </FormGroup>


          </Form>

        </div>






        // <form onSubmit={this.addUser}>
        //   <header>
        //     <h1>Add a User</h1>
        //   </header>
        //   Enter a UserName      : <input type="text" name="username" />
        //   <br />
        //   Enter your First name : <input type="text" name="firstname" />
        //   <br />
        //   Enter your Last name  : <input type="text" name="lastname" />
        //   <br />

        //   <button  >Add User</button>
        // </form>
      );
    }
  }
  
  export default CreateUsers;
  