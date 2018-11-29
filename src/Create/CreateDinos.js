import React, { Component } from "react";
import axios from "axios";
import rex from '.././Images/rex.png'

import {
  FormControl,
  Form,
  Col,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";

class CreateDinos extends Component {
  addDinos = e => {
    e.preventDefault();

    const type = e.target.elements.type.value;
    const dinosaurName = e.target.elements.dinosaurname.value;
    const diet = e.target.elements.diet.value;
    const description = e.target.elements.description.value;
    
    if (
      type &&
      dinosaurName &&
      diet &&
      description
    ) {
      axios
        .post(` http://35.230.143.224:8080/dinodb/api/dinosaur/addDinosaur`, {
          type,
          dinosaurName,
          diet,
          description
        })
        .then(res => {
          console.log(res);
          alert("Dinosaur Added!")
        })
    } else {
      alert("Some fields need filling");
    }
  };

  render() {
    return (
      <div>
        <header>
          <h1>Add a Dinosaur</h1>
        </header>
        <Form horizontal onSubmit={this.addDinos}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Enter the Type of Dinosaur [LAND,FLYING,SEA] : </p>
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                name="type"
                placeholder="case sensitive, e.g. LAND"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right">  Enter the name of the Dinosaur : </p>
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                name="dinosaurname"
                placeholder="e.g Rex"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Enter the diet of the Dinosaur [Carnivorous/Herbivorous/Omnivorous] : </p>
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                name="diet"
                placeholder="e.g Herbivorous"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Enter a description for the dinosaur: </p>
            </Col>
            <Col sm={1000}>
              <FormControl
                type="text"
                name="description"
                placeholder="e.g Aggressive"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={5}>
              <Button bsStyle="info" type="submit">
                Add Dino
              </Button>
            </Col>
          </FormGroup>
        </Form>

        <img src={rex} />

      </div>
    );
  }
}

export default CreateDinos;
