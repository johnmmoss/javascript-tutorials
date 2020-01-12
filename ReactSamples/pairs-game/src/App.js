import React, { useState, useEffect } from 'react';
import './App.css';
import _ from 'underscore'

function App() {

  const generateGameNumbers = () => {
    return _.shuffle((_.range(1, 9).concat(_.range(1, 9))));
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

  const manageGame = (index, number) => {

    if (candidateNumber1Index < 0) {
      setCandidateNumber1Index(index);
      console.log("New Candidate 1");
      return;
    } 
    
    if (candidateNumber2Index < 0) {
      setCandidateNumber2Index(index);
      console.log("New Candidate 2");
      return;
    } 

    // Otherwise, we have selected two numbers!
    if (gameNumbers[candidateNumber1Index] === gameNumbers[candidateNumber2Index])  {

      // we have a match
      setMatchedNumbers([...matchedNumbers, gameNumbers[candidateNumber2Index]]);
      setCandidateNumber1Index(index);
      setCandidateNumber2Index(-1);
      console.log("MATCH");
      console.log("Next click index:" + index);
    } else {
      setCandidateNumber1Index(index);
      setCandidateNumber2Index(-1);
      console.log("No Match - Reset");
    }

    // When only two remaining we reduce.
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
