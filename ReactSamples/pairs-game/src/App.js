import React, { useState, useEffect } from 'react';
import './App.css';
import _ from 'underscore'

function App() {

  const numberOfPairs = 9;
  // 1. Have a message (image?) display showing the results of two clicks
  // 3. Need to restart the game
  // 4. Make it so the player can select the size of the grid
  // 5. Can click green buttons - disable the click if is green 
  // BUG Double click a number and it matchs the other

  const generateGameNumbers = () => {
    return _.shuffle((_.range(1, numberOfPairs).concat(_.range(1, numberOfPairs))));
  }
  const [gameNumbers, setGameNumbers] = useState(generateGameNumbers);
  const [matchedNumbers, setMatchedNumbers] = useState([]);
  const [candidateNumber1Index, setCandidateNumber1Index] = useState(-1);
  const [candidateNumber2Index, setCandidateNumber2Index] = useState(-1);

  const numberStatus = (index, number) => {

    if (matchedNumbers.includes(number)) {
      return 'matched';
    } else if (candidateNumber1Index === index ||
      candidateNumber2Index === index) {
      return 'candidate';
    }
    return 'hidden';
  }

  const manageGame = (currentIndex) => {

    // Click 1... selects the first candidate
    if (candidateNumber1Index < 0) {
      setCandidateNumber1Index(currentIndex);
      return;
    }

    // Click 2... selects the second candidate
    if (candidateNumber2Index < 0 && isLastPair()) {
      setMatchedNumbers([...matchedNumbers, gameNumbers[currentIndex]]);
      setCandidateNumber1Index(-1);
      setCandidateNumber2Index(-1);
      return;
    }
    if (candidateNumber2Index < 0) {
      setCandidateNumber2Index(currentIndex);
      return;
    }

    // Click 3... check if the last two clicks matched
    if (gameNumbers[candidateNumber1Index] === gameNumbers[candidateNumber2Index]) {
      setMatchedNumbers([...matchedNumbers, gameNumbers[candidateNumber2Index]]);
    }
    setCandidateNumber1Index(currentIndex);
    setCandidateNumber2Index(-1);
  }

  const isLastPair = () => {
    return (matchedNumbers.length === numberOfPairs - 2);
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
            {
              gameNumbers
                .map((number, index) =>
                  <PairNumber
                    key={index}
                    index={index}
                    number={number}
                    status={numberStatus(index, number)}
                    numberClicked={manageGame}>
                  </PairNumber>
                )
            }
          </div>
        </div>
        <div>
          <button >Restart Game</button>
        </div>
        <div className="timer">Time Remaining: 0</div>
        <div className="game-done">
          <div className="message" style={{ color: 'green' }} >
            Nice - you won :)
          </div>
          <button onClick={() => alert('TODO:- Implement game restart')}>Play Again</button>
        </div>
      </div>
    </>
  );
}

const PairNumber = (props) => {

  const styles = () => {
    if (props.status === 'matched') {
      return { backgroundColor: '#80ff80' };
    } else if (props.status === 'candidate') {
      return { backgroundColor: 'blue' };
    }
    return null;
  }

  return (
    <button className="number"
      onClick={(i, n) => props.numberClicked(props.index, props.number)}
      style={styles()} >
      {
        props.status === 'matched' || props.status === 'candidate' ? props.number : "x"
      }
    </button >
  )
}
export default App;
