import React, { Component } from 'react';
import axios from 'axios';
import allDinos from '.././Images/allDinos.jpg'
import { BootstrapTable, 
  TableHeaderColumn, 
  
  BSTable } from 'react-bootstrap-table';
import UpdateDinos from '../Update/UpdateDinos';

class Tables extends Component {
  constructor(props){
    super(props);
    this.state = {
      dinos: this.props.array
    }
  }
  componentDidMount() {
    this.getAllDinosaurs();
  }
  getAllDinosaurs = () => {
    axios.get('http://35.230.143.224:8080/dinodb/api/dinosaur/getAllDinosaurs').then(res => {
      this.setState({
        dinos: res.data
      });
    });
  }
  deleteDino = (event) => {
    axios.delete('http://35.230.143.224:8080/dinodb/api/dinosaur/deleteDinosaur/' + event).then((response) => {
  window.location.reload()
    });
  }
  createDeleteButton =(cell,row) => {
    return <button type = "button" className="btn btn-outline-danger"  id={row.dinosaurid} onClick={() => this.deleteDino(row.dinosaurid)}>Delete Dino</button>;
  }

  componentWillMount() {
    axios.all([
      axios.get('http://35.230.143.224:8080/dinodb/api/dinosaur/getAllDinosaurs'),
    ])
    .then(axios.spread(function ( type, dinosaurid ) {
      let dinosaur = type.data.concat(dinosaurid.data);
        this.setState({ dinosaur })
    }))

    .catch(error => console.log(error));
 
 }

  render () {
    return (
      <div className="Table" >
      <h1> List of all Dinosaurs </h1>
      <BootstrapTable data={this.state.dinos}
     class="table"
     striped
      hover
      condensed
      pagination
      search>
      <TableHeaderColumn dataField='dinosaurid' isKey>ID</TableHeaderColumn>
      <TableHeaderColumn dataField='dinosaurName'>Name</TableHeaderColumn>
      <TableHeaderColumn dataField='diet'>Diet</TableHeaderColumn>
      <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
      <TableHeaderColumn dataField='type'>Type   </TableHeaderColumn>
      <TableHeaderColumn dataField='button' dataFormat={this.createDeleteButton}>Delete</TableHeaderColumn>
      
      </BootstrapTable>


      {/* <img src={allDinos}/> */}

      <UpdateDinos/>



      </div>
    );
  }


}

export default Tables;
