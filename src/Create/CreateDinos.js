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

class CreateDinos extends React.Component {
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
          .post(` http://localhost:8080/dinodb/api/dinosaur/addDinosaur`, {
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
          <h1>Add a Dinosaur</h1>
        </header>
        <Form horizontal onSubmit={this.addDinos}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right">   Enter the Type of Dinosaur [LAND,FLYING,SEA] : </p>
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                name="type"
                placeholder="e.g LAND"
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

        </div>
        // <form onSubmit={this.addDinos}>
        //   <header>
        //     <h1>Add a Dinosaur</h1>
        //   </header>
          
        //   Enter the Type of Dinosaur [LAND,FLYING,SEA] : <input type="text" name="type" />
        //   <br />
        //   Enter the name of the Dinosaur : <input type="text" name="dinosaurname" />
        //   <br />
        //   Enter the diet of the Dinosaur [Carnivorous/Herbivorous/Omnivorous] : <input type="text" name="diet" />
        //   <br />
        //   Enter a description for the dinosaur : <input type="text" name="description" />
        //   <br />

        //   <button  >Add Dino</button>
        // </form>
      );
    }
  }
  
  export default CreateDinos;