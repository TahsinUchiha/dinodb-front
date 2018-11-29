import React, { Component } from "react";
import axios from "axios";
import bronto from '.././Images/bronto.png'

import {
  FormControl,
  Form,
  Col,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";

class DeleteDinos extends Component {
    constructor(props) {
      super(props);
      this.state = { dinos: "" };
    }
  
    removeDino = e => {
      e.preventDefault();
  
      const dinoID = e.target.elements.dinoID.value;
  
      if (dinoID) {
        axios
          .delete(`http://35.230.143.224:8080/dinodb/api/dinosaur/deleteDinosaur/${dinoID}`)
          .then(res => {
            console.log(res);
            alert("Dinosaur Successfully Removed!")
          });
      } else return;
    };
  
    render() {
      return (
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
        <img src = {bronto}/>
      </div>
      );
    }
  }
  
  export default DeleteDinos;
  