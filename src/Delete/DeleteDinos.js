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

class DeleteDinos extends React.Component {
    constructor(props) {
      super(props);
      this.state = { dinos: "" };
    }
  
    removeDino = e => {
      e.preventDefault();
  
      const dinoID = e.target.elements.dinoID.value;
  
      if (dinoID) {
        axios
          .delete(`http://localhost:8080/dinodb/api/dinosaur/deleteDinosaur/${dinoID}`)
          .then(res => {
            console.log(res);
            alert("Dinosaur Successfully Removed!")
          });
      } else return;
    };
  
    render() {
      return (
        // <form onSubmit={this.removeDino}>
        //     <header>
        //     <h1>Delete Dino by ID</h1>
        //     </header>
  
        //   <p>Delete a Dinosaur of your choice by ID [Hint: check which user is which ID]</p>
        //   <input type="text" name="dinoID" />
        //   <button>Remove Dinosaur</button>
        // </form>

        <div>
        <header>
          <h1>Delete Dinosaur</h1>
        </header>
        <Form horizontal onSubmit={this.removeDino}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right">
                {" "}
                Enter the ID of the Dino you would like to remove :{" "}
              </p>
            </Col>
            <Col sm={3}>
              <FormControl
                type="number"
                name="dinoID"
                placeholder="Dino ID"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={5}>
              <Button bsStyle="danger" type="submit">
                Delete Dinosaur
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
      );
    }
  }
  
  export default DeleteDinos;
  