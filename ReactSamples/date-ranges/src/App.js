import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Github Repo Search</h1>
      <div className="github-select">
        <p>Please select your Github Repository</p>
        <input type="text" placeholder="github repository"></input>
        <button>Search</button>
      </div>
      <div className="repo-search">
        <div className="form" >
          <div className="form-row">
            <label>Start Date:</label> 
            <input type="text" ></input>
          </div>
          <div className="form-row">
            <label>End Date:</label> 
            <input type="text" ></input>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>one</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>two</td>
            </tr>
          </tbody>
        </table>


      </div>
    </div>
  );
}


export default App;
