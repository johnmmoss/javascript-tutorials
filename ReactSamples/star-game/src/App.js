import React from 'react';
import { useState } from 'react'
import  StarGame from './components/StarGame'
import './App.css';

function App() {
  const [gameId, setGameId] = useState(1);
  return (
    <StarGame key={gameId} newGame={() => setGameId(gameId + 1)} />
  );
}

export default App;