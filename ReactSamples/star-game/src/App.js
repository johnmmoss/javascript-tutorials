import React from 'react';
import { useState } from 'react'
import './App.css';
import utils from './util.js'

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

function App() {

  const [stars, setState] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState([1, 2, 3, 5, 6]);
  const [candidateNums, setCandidateNums] = useState([2, 3]);

  const candidatesAreWrong = utils.sum(candidateNums) > stars;

  const numberStatus = (number) => {

    if (!availableNums.includes(number)) {
      return 'used';
    }

    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  }

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay count={stars} />
        </div>
        <div className="right">
          {
            utils.range(1, 9).map(x =>
              <PlayNumber
                key={x}
                number={x}
                status={numberStatus(x)} />
            )}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
}

const StarsDisplay = props => (
  <>
    {
      utils.range(1, props.count).map(x =>
        <div key={x} className="star" />
      )}
  </>
);

const PlayNumber = props => (
  <button
    key={props.number}
    className='number'
    style={{backgroundColor: colors[props.status] }}
  >
    {props.number}
  </button>
)

export default App;