import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="game">
        <h1>Pairs Game</h1>
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="main">
            <button className="number">1</button>
            <button className="number">2</button>
            <button className="number">2</button>
            <button className="number">1</button>
            <button className="number">4</button>
            <button className="number">7</button>
            <button className="number">6</button>
            <button className="number">5</button>
            <button className="number">8</button>
            <button className="number">3</button>
            <button className="number">6</button>
            <button className="number">4</button>
            <button className="number">8</button>
            <button className="number">3</button>
            <button className="number">5</button>
            <button className="number">7</button>
          </div>
        </div>
        <div className="timer">Time Remaining: 0</div>
        <div className="game-done">
          <div className="message" style={{color:'green'}} >
            Nice - you won :)
          </div>
          <button onClick={() => alert('TODO:- Implement game restart')}>Play Again</button>
        </div>
      </div>
    </>
  );
}

export default App;
