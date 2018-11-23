import React from "react";
import SearchAll from './SearchAll.js';
import './Home.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function HomeMain() {
  return (
    <Router>
      <div>
        <ul  className="homebar">
        <h2 className="title"><a>Dino-DataBase</a></h2>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li className="searchbar" style={{float:"right"}}><SearchAll /></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <ul className="homebar">
      <h1><a>Home</a></h1>
      <li><a>All Dinosaur</a></li>
        <li><a>Register</a></li>
        <li><a>Add</a></li>
        <li><a>Login</a></li>
        <li><a>About</a></li>
        </ul> 
    </div>
  );
}

function About() {
  return (
    <div>
      <h1><a>About</a></h1>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default HomeMain;