import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">

      <h1>Github Repo Search</h1>

      <div className="github-select">
        <p>Please type Github repository name</p>
        <div className="form-group">
          <input type="text" placeholder="github repository name" className="form-control"></input>
        </div>
      </div>

    </div>
  );
}


export default App;
