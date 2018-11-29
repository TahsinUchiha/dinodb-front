import React from "react";
import './Home.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import {
  DropdownButton,
  MenuItem,
  Navbar,
  Nav,
  NavItem,
} from "react-bootstrap";

import CreateUsers from './Create/CreateUsers';
import DeleteUsers from './Delete/DeleteUsers'
import CreateDinos from './Create/CreateDinos.js';
import DeleteDinos from './Delete/DeleteDinos';
import DinoForm from './Read/DinoForm';
import Tables from './Read/DinoTable';
import UserTables from './Read/UserTable.js';
import UpdateUsers from './Update/UpdateUsers.js';
import UpdateDinos from './Update/UpdateDinos.js';
import UserForm from './Read/UserForm.js'


function HomeMain() {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a>created by Tahsin</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/UserTables">
                User Table
      </NavItem>
              <NavItem eventKey={2} href="/Tables">
                Dinosaur Table
      </NavItem>
              <NavItem>
                <DropdownButton
                  bsStyle="secondary"
                  title="UserHub">
                  <MenuItem eventKey="1">
                    <Link to="/CreateUsers" exact>
                      Create a User
              </Link>
                  </MenuItem>
                  <MenuItem eventKey="2" href="/Registration">
                    <Link to="/DeleteUsers" exact>
                      Delete a User by ID
              </Link>
                  </MenuItem>
                  <MenuItem eventKey="5">
                    <Link to="/UserForm" exact>
                      View Specific Users by ID
              </Link>
                  </MenuItem>
                  <MenuItem eventKey="8">
                    <Link to="/UpdateUsers" exact>
                      Update Users by ID
              </Link>
                  </MenuItem>
                </DropdownButton>
              </NavItem>
              <NavItem>
                <DropdownButton
                  bsStyle="secondary"
                  title="DinoHub">
                  <MenuItem eventKey="3">
                    <Link to="/CreateDinos" exact>
                      Add a Dinosaur
              </Link>
                  </MenuItem>
                  <MenuItem eventKey="4">
                    <Link to="/DeleteDinos" exact>
                      Delete a Dinosaur by ID
              </Link>
                  </MenuItem>
                  <MenuItem eventKey="5">
                    <Link to="/DinoForm" exact>
                      View Specific Dinosaurs by ID
              </Link>
                  </MenuItem>
                  <MenuItem eventKey="9">
                    <Link to="/UpdateDinos" exact>
                      Update Dinosaurs by ID
              </Link>
                  </MenuItem>
                </DropdownButton>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="mailto:alton255@yahoo.co.uk">
                Contact
      </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/CreateUsers" component={CreateUsers} />
        <Route path="/CreateDinos" component={CreateDinos} />
        <Route path="/DeleteUsers" component={DeleteUsers} />
        <Route path="/DeleteDinos" component={DeleteDinos} />
        <Route path="/DinoForm" component={DinoForm} />
        <Route path="/UserForm" component={UserForm} />
        <Route path="/Tables" component={Tables} />
        <Route path="/UserTables" component={UserTables} />
        <Route path="/UpdateUsers" component={UpdateUsers} />
        <Route path="/UpdateDinos" component={UpdateDinos} />
      </div>
    </Router>
  );
}





export default HomeMain;