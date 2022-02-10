import { useState } from "react";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(
    Math.round(Math.random() * 1) === 1 ? 'X' : 'O'
  );
  const [winner, setWinner] = useState(null);

  return (
    <div>
      <p>Hey {currentPlayer}, its your turn</p>
      This is the board
    </div>
  )
}

export default Board;