import React, { Component } from "react";
import axios from "axios";
import update from '.././Images/update.jpg'

import {
  FormControl,
  Form,
  Col,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";


class UpdateUsers extends Component {
  updateUsers = e => {
    e.preventDefault();

    const userID = e.target.elements.userID.value;
    const userName = e.target.elements.username.value;
    const firstName = e.target.elements.firstname.value;
    const lastName = e.target.elements.lastname.value;

    if (
      userID &&
      userName &&
      firstName &&
      lastName
    ) {
      axios
        .put(
          `http://35.230.143.224:8080/dinodb/api/dinosaur/updateUsers/${userID}`,
          {
            userID,
            userName,
            firstName,
            lastName
          }
        )
        .then(res => {
          console.log(res);
          alert(
            "User has been updated to" + firstName + " " + lastName
          );
        });
    } else {
      alert("Some fields require filling!");
    }
  };

  render() {
    return (
      <div>
        <header>
          <h1>Update Users </h1>
        </header>

        <Form horizontal onSubmit={this.updateUsers}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right">
                {" "}
                Enter the user ID :{" "}
              </p>
            </Col>
            <Col sm={3}>
              <FormControl
                input
                type="number"
                name="userID"
                placeholder="User ID..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Enter a username : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                input
                type="text"
                name="username"
                placeholder="User Name..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Enter your First Name : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                input
                type="text"
                name="firstname"
                placeholder="First Name..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Enter your Last Name : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                input
                type="text"
                name="lastname"
                placeholder="Last Name..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={5}>
              <Button bsStyle="warning" type="submit">
                Update User Information
              </Button>
            </Col>
          </FormGroup>
        </Form>

        <img src={update} />
      </div>
    );
  }
}

export default UpdateUsers;
