import React, { useState, useEffect } from 'react';
import './App.css';
import _ from 'underscore'

function App() {

  const numberOfPairs = 9;

  // Make it so the player can select the size of the grid
  // BUG Can click green buttons - disable the click if is green 
  // BUG Double click a number and it matchs the other
  // Status's aren't really modelled very well in PlayNumber
  // Add a red/green highlight when candidates are matched
  // Add a game history so all the attempts appear down a list

  const generateGameNumbers = () => {
    return _.shuffle((_.range(1, numberOfPairs).concat(_.range(1, numberOfPairs))));
  }
  const [gameNumbers, setGameNumbers] = useState(generateGameNumbers);
  const [matchedNumbers, setMatchedNumbers] = useState([]);
  const [candidateNumber1Index, setCandidateNumber1Index] = useState(-1);
  const [candidateNumber2Index, setCandidateNumber2Index] = useState(-1);
  const [gameHelp, setGameHelp] = useState('Click a square to get started...');

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
      setGameHelp('Great, now pick another number...');
      return;
    }

    // Click 2... selects the second candidate
    if (candidateNumber2Index < 0 && isLastPair()) {
      setMatchedNumbers([...matchedNumbers, gameNumbers[currentIndex]]);
      setCandidateNumber1Index(-1);
      setCandidateNumber2Index(-1);
      setGameHelp('Your a WINNER!!!')
      return;
    }
    if (candidateNumber2Index < 0) {
      setCandidateNumber2Index(currentIndex);
      if (gameNumbers[candidateNumber1Index] === gameNumbers[currentIndex]) {
        setGameHelp('YES, You found a pair!')
      } else {
        setGameHelp('Nooo... click another square to try again!')
      }
      return;
    }

    // Click 3... check if the last two clicks matched
    if (gameNumbers[candidateNumber1Index] === gameNumbers[candidateNumber2Index]) {
      setMatchedNumbers([...matchedNumbers, gameNumbers[candidateNumber2Index]]);
    }
    setGameHelp('Click another square to match a pair');
    setCandidateNumber1Index(currentIndex);
    setCandidateNumber2Index(-1);
  }

  const restartGame = () => {
    setMatchedNumbers([]);
    setCandidateNumber1Index(-1);
    setCandidateNumber2Index(-1);
    setGameNumbers(generateGameNumbers);
    setGameHelp('Click a square to get started...');
  }

  const isLastPair = () => {
    return (matchedNumbers.length === numberOfPairs - 2);
  }
  return (
    <>
      <div className="game">
        <h1>Pairs Game</h1>
        <div className="help">
          Match each of the pairs of the number in the grid.
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
          <div className="main-help">
            <h4>{gameHelp}</h4>
            {
              matchedNumbers.length == numberOfPairs - 1 ?
              <button onClick={restartGame}>Restart Game</button> :
              null
            }
          </div>
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
      return { backgroundColor: '#00BFFF' };
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
