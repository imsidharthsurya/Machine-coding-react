import React, { useState } from "react";

const Tictac = () => {
  const [firstTurn, setFirstTurn] = useState(true);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const checkForWinner = (board, char) => {
    // rows
    for (let i = 0; i < 3; i++) {
      if (board[i].every((cell) => cell === char)) return true;
    }
    // cols
    for (let j = 0; j < 3; j++) {
      if ([0, 1, 2].every((i) => board[i][j] === char)) return true;
    }
    // main diagonal
    if ([0, 1, 2].every((i) => board[i][i] === char)) return true;
    // minor diagonal
    if ([0, 1, 2].every((i) => board[i][2 - i] === char)) return true;

    return false;
  };
  const handleClick = (row, col) => {
    if (board[row][col] !== "") return; //ie. already filled
    // deep copy the board
    const newBoard = board.map((r) => [...r]);
    const player = firstTurn ? "O" : "X";
    newBoard[row][col] = player;
    setBoard(newBoard);
    setFirstTurn(!firstTurn);

    if (checkForWinner(newBoard, player)) {
      alert(`${player} is the winner`);
    }
  };
  return (
    <div>
      {new Array(3).fill("").map((_, row) => {
        return (
          <div className="row-grid" key={row}>
            {new Array(3).fill("").map((_, col) => {
              return (
                <div
                  className="grid"
                  onClick={() => handleClick(row, col)}
                  key={`${row}-${col}`}
                >
                  {board[row][col]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Tictac;
