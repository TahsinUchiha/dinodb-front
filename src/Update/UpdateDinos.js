import React, { Component } from "react";
import axios from "axios";
import mosa from '.././Images/mosa.png'

import {
  FormControl,
  Form,
  Col,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";
import {url} from "../App";

class UpdateDinos extends Component {
 
updateDinos = e => {
    e.preventDefault();

    const dinosaurid = e.target.elements.dinosaurid.value;
    const type = e.target.elements.type.value;
    const dinosaurName = e.target.elements.dinosaurName.value;
    const diet = e.target.elements.diet.value;
    const description = e.target.elements.description.value;

    if (
      dinosaurid &&
      type &&
      dinosaurName &&
      diet &&
      description
    ) {
      axios
        .put(
          url+`:8080/dinodb/api/dinosaur/updateDinosaur/${dinosaurid}`,
          {
            dinosaurid,
            type,  
            dinosaurName,
            diet,
            description
          }
        )
        .then(res => {
          console.log(res);
          alert(
            "Dinosaur has been updated to " + dinosaurName + "  " + type
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
          <h1>Update Dinosaur Information</h1>
        </header>

        <Form horizontal onSubmit={this.updateDinos}>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right">
                {" "}
                Enter the Dinosaur ID :{" "}
              </p>
            </Col>
            <Col sm={3}>
              <FormControl
                input
                type="number"
                name="dinosaurid"
                placeholder="Dino ID..."
              />
            </Col>
          </FormGroup>

           <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Enter the type of the Dinosaur : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                input
                type="text"
                name="type"
                placeholder="case Sensitive [LAND,SEA,FLYING...]"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Enter the name of the Dinosaur : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                input
                type="text"
                name="dinosaurName"
                placeholder="e.g Rex..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Enter a diet : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                input
                type="text"
                name="diet"
                placeholder="e.g Carnivorous..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Description : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                input
                type="text"
                name="description"
                placeholder="describe its behaviour..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={5}>
              <Button bsStyle="warning" type="submit">
                Update Dinosaur Information
              </Button>
            </Col>
          </FormGroup>
        </Form>

        <img src = {mosa}/>
      </div>
    );
  }
}

export default UpdateDinos;