import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { tsPropertySignature } from '@babel/types';

function App() {

  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);

  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <h1> Counter Example</h1>
        </div>
      </div>
      <div class="row" >
        <div class="col-md-6">
          <Page header="Lets do some counting..." />
        </div>
        <div class="col-md-3">
          <Output message={counter} />
        </div>
        <div class="col-md-3">
          <Button onClickHandler={incrementCounter} />
        </div>
      </div>
    </div>
  );
}

function Button(props) {
  return (
    <input class="btn btn-primary" type="button" value="Count" onClick={props.onClickHandler} ></input>
  )
}

function Output(props) {
  return (
    <div><p>{props.message}</p></div>
  );
}

function Page(props) {
  return (
      <p>{props.header}</p>
  )
}

export default App;
