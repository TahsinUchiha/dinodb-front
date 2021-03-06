import React, { Component } from "react";
import axios from "axios";
import del from '.././Images/del.jpg'
import {
  FormControl,
  Form,
  Col,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";
import {url} from "../App";
class DeleteUsers extends Component {
    constructor(props) {
      super(props);
      this.state = { user: "" };
    }
  
    removeUser = e => {
      e.preventDefault();
  
      const userID = e.target.elements.userID.value;
  
      if (userID) {
        axios
          .delete(url+`:8080/dinodb/api/dinosaur/deleteUsers/${userID}`)
          .then(res => {
            console.log(res);
            alert("User Successfully Removed!");
          });
      } else return;
    };
  
    render() {
      return (
        <div>
        <header>
          <h1>Delete User</h1>
        </header>
        <Form horizontal onSubmit={this.removeUser}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right">
                {" "}
                Enter the ID of the User you would like to remove :{" "}
              </p>
            </Col>
            <Col sm={3}>
              <FormControl
                type="number"
                name="userID"
                placeholder="User ID"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={5}>
              <Button bsStyle="danger" type="submit">
                Delete User
              </Button>
            </Col>
          </FormGroup>
        </Form>
        <img src={del}/>
        </div>
      );
    }
  }
  
  export default DeleteUsers;
  