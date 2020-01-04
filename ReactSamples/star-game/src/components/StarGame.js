import React from 'react';
import utils from '../util.js'
import useGameState  from '../hooks/useGameState'
import PlayNumber from './PlayNumber'
import StarsDisplay from './StarsDisplay'
import PlayAgain from './PlayAgain'

function StarGame(props) {

  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  } = useGameState();

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus = availableNums.length === 0
    ? 'won'
    : secondsLeft === 0 ? 'lost' : 'active'

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
    if (gameStatus !== 'active' || status === 'used') {
      return;
    }

    const newCandidateNums =
      status === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number);

    setGameState(newCandidateNums);
  }

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">

          {
            gameStatus != 'active' ?
              (
                <PlayAgain onClickHandler={props.newGame} gameStatus={gameStatus} />
              ) : (
                <StarsDisplay count={stars} />
              )
          }

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
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
}

export default StarGame;