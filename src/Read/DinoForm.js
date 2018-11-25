import React, { Component } from 'react';
import './DinoForm.css'
import axios from 'axios';



class DinoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Dino: "" };

  }
 
getDino = e => {
    e.preventDefault();
    const dinoID = e.target.elements.dinosaur.value;
  
    if (dinoID) {
      axios.get(`http://35.230.143.224:8080/dinodb/api/dinosaur/getDinosaur/${dinoID}`)
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
      });
  
    } else return;
  };
  render() {

    return (

      <form onSubmit={this.getDino}>
        <input style = {{ marginTop: "30px auto", display: "block"}} className="search" type="text" name = "dinosaur"
        placeholder="Search Dinosaur" />
        <input className="button" value="Search"/>
        <button name= "button">
          Get Dino
        </button>

     
        {this.state.type ? <p> Type : {this.state.type}</p> : <p />}
        {this.state.dinosaurName ? <p> Dino : {this.state.dinosaurName}</p> : <p />}
        {this.state.diet ? <p>Diet : {this.state.diet}</p> : <p />}
        {this.state.description ? <p>Description : {this.state.description}</p> : <p />}
  
      </form>

      

 
    );

  }

}

export default DinoForm;