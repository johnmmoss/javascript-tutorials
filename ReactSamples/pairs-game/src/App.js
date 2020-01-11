import React, { useState } from 'react';
import './App.css';
import _ from 'underscore'

function App() {

  const [availableNumbers, setAvailableNumbers] = useState(_.range(1, 9));
  const [gameNumbers, setGameNumbers] = useState(_.shuffle(availableNumbers.concat(availableNumbers)));
  const shuffleNumbers = () => {
    console.log("Shuffling numbers");
    setGameNumbers(_.shuffle(availableNumbers.concat(availableNumbers)));
    console.log(gameNumbers);
  }

  return (
    <>
      <div className="game">
        <h1>Pairs Game</h1>
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="main">
            {console.log("Rendering...")}
            {
              gameNumbers.map(x => <PairNumber number={x}></PairNumber>)
            }
          </div>
        </div>
        <div>
          <button onClick={shuffleNumbers} >Restart Game</button>
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

const PairNumber = (props) => (

  <button className="number">{props.number}</button>
)
export default App;
