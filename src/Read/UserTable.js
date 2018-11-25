import React, { Component } from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn, BSTable } from 'react-bootstrap-table';

class UserTables extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: this.props.array
    }
  }
  componentDidMount() {
    this.getAllUsers();
  }
  getAllUsers = () => {
    axios.get(`http://35.230.143.224:8080/dinodb/api/dinosaur/getAllUsers`).then(res => {
      this.setState({
        users: res.data
      });
    });
  }
  deleteUser = (event) => {
    axios.delete(`http://35.230.143.224:8080/dinodb/api/dinosaur/deleteUsers/` + event).then((res) => {
  window.location.reload()
    });
  }
  createDeleteButton =(cell,row) => {
    return <button id={row.userID} className="btn btn-outline-danger" onClick={() => this.deleteUser(row.userID)}>Delete User</button>;
  }

  componentWillMount() {
    axios.all([
      axios.get(`http://35.230.143.224:8080/dinodb/api/dinosaur/getAllUsers`),
    ])
    .then(axios.spread(function ( userID, userName ) {
      let user = userID.data.concat(userName.data);
        this.setState({ user })
    }))

    .catch(error => console.log(error));
 
 }

  render () {
    return (
      <div className="Table">
      <BootstrapTable data={this.state.users}
       striped
       hover
       condensed
       pagination
       insertRow
       search
      search>
      <TableHeaderColumn dataField='userID' isKey>ID</TableHeaderColumn>
      <TableHeaderColumn dataField='userName'>UserName</TableHeaderColumn>
      <TableHeaderColumn dataField='firstName'>FirstName</TableHeaderColumn>
      <TableHeaderColumn dataField='lastName'>LastName</TableHeaderColumn>
      <TableHeaderColumn dataField='button' dataFormat={this.createDeleteButton}>Delete</TableHeaderColumn>
      
      </BootstrapTable>
      </div>
    );
  }


}

export default UserTables;
