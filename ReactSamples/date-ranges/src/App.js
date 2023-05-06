import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

function App() {
<<<<<<< Updated upstream
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
=======

  const [repoName, setRepoName] = useState('');
  const [repoResult, setRepoResult] = useState('');

  const repoTextChangedHandler = async (event) => {
    let repoText = event.target.value;
    setRepoName(repoText);
    const response = await axios.get(`https://api.github.com/users/${repoText}`);
    setRepoResult(response.data);
  }
  return (
    <>
      <div className="container">
        <h2>Github Repo</h2>
        Type name of your repo...
        <input type="text" className="form-control" value={repoName} onChange={repoTextChangedHandler}/>
        <div>
          {JSON.stringify(repoResult)}
        </div>
      </div>
    </>
>>>>>>> Stashed changes
  );
}


export default App;
