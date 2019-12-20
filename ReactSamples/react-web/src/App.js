import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div class="page">
      <h2>Home</h2>
      <p>This is my homepage </p>
    </div>
  );
}

function About() {
  return (
    <div class="page">
      <h2>About</h2>
      <p>This is my About</p>
    </div>
  );
}

function Users() {
  return (
    <div>
      <PageContent header="Yeah Baby!" strapLine="Wahtcha wit hooooo!" />
      <hr />
      <div>Loriem ... </div>
      <form>
        <input type="text"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

function PageContent(props) {
  return (
    <div class="page">
      <h2>{props.header}</h2>
      <p>{props.strapLine}</p>
    </div>
  );
}
