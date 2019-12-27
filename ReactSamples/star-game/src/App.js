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

  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);

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

  const onClickHandler = (number, status) => {

    if (status === 'used') {
      return;
    }

    const newCandidateNums =
      status === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number);

    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {

      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
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
                status={numberStatus(x)}
                onClickHandler={onClickHandler}
              />
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
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClickHandler(props.number, props.status)}
  >
    {props.number}
  </button>
)

export default App;