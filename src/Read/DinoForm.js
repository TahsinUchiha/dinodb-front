import React, { Component } from 'react';
import axios from 'axios';
import argent from '.././Images/argent.png'
import {url} from "../App";



class DinoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Dino: "" };

  }
 
getDino = e => {
    e.preventDefault();
    const dinoID = e.target.elements.dinosaur.value;
  
    if (dinoID) {
      axios.get(url+`:8080/dinodb/api/dinosaur/getDinosaur/${dinoID}`)
      .then(res => {
        // console.log(res);
        const type = res.data.type;
        this.setState({ type });
        const dinosaurName = res.data.dinosaurName;
        this.setState({dinosaurName});
        const diet = res.data.diet;
        this.setState({diet});
        const description = res.data.description;
        this.setState({description});
      })
      
    .catch(error => console.log(error));
  
    } else return;
  };
  render() {

    return (

        <div>

      <form onSubmit={this.getDino}>
        <input className="search" type="text" name = "dinosaur"
        placeholder="Search Dinosaur" />
        <button name= "button">
          Get Dino
        </button>

     
        {this.state.type ? <p> Type : {this.state.type}</p>  :<p> Please Enter an ID </p>}
        {this.state.dinosaurName ? <p> Dino : {this.state.dinosaurName}</p> : <p />}
        {this.state.diet ? <p>Diet : {this.state.diet}</p> : <p />}
        {this.state.description ? <p>Description : {this.state.description}</p> : <p />}
  
      </form>

      <img src={argent}/>

      </div>

 
    );

  }

}

export default DinoForm;