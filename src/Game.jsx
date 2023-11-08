import { useState } from 'react';
import Board from './Board';
import './styles.css';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [winner, setWinner] = useState(null); // Track the winner

  const handleClick = (i) => {
    if (winner || squares[i]) {
      return;
    }

    const squaresCopy = [...squares];
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);

    // Check for a winner and set the winner state
    const calculatedWinner = calculateWinner(squaresCopy);
    if (calculatedWinner) {
      setWinner(calculatedWinner);
      if (calculatedWinner === 'X') {
        setXScore(xScore + 1);
      } else if (calculatedWinner === 'O') {
        setOScore(oScore + 1);
      }
    }

    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>
          {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}
        </div>
        <button onClick={handleRestart}>Restart</button>
        <div>X Score: {xScore}</div>
        <div>O Score: {oScore}</div>
      </div>
    </div>
  );
}

export default Game;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
