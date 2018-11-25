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


class UpdateDinos extends Component {
  updateDinos = e => {
    e.preventDefault();

    const dinosaurid = e.targent.elements.dinosaurid.value;
    const type = e.target.elements.type.value;
    const dinosaurName = e.targent.elements.dinosaurName.value;
    const diet = e.targent.elements.diet.value;
    const description = e.targent.elements.description.value;

    if (
      dinosaurid &&
      type &&
      dinosaurName &&
      diet &&
      description
    ) {
      axios
        .put(
          `http://35.230.143.224:8080/dinodb/api/dinosaur/updateDinosaur/${dinosaurid}`,
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
            "Dinosaur has been updated to " + dinosaurName + "  " + diet
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
                placeholder="LAND,SEA,FLYING..."
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
              <p align="right"> description : </p>
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
      </div>
    );
  }
}

export default UpdateDinos;