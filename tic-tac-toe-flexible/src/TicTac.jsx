import { useState } from "react";
import { checkWinner } from "./utils/utils";

const TicTac = ({ size = 3 }) => {
  const [board, setBoard] = useState(
    Array.from({ length: size }, (_, i) => {
      return new Array(size).fill("");
    })
  );
  let winner = checkWinner(board, size);

  const [xTurn, setXTurn] = useState(true);
  const handleClick = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] || winner) return; //ie. value already filled there or we got the winner
    const boardCopy = JSON.parse(JSON.stringify(board)); // creating deep copy else even though value changed but it'll point to same location
    boardCopy[rowIndex][colIndex] = xTurn ? "X" : "O";
    setBoard(boardCopy);
    setXTurn(!xTurn);
  };

  const handleReset = () => {
    setBoard(
      Array.from({ length: size }, (_, i) => {
        return new Array(size).fill("");
      })
    );
  };
  return (
    <>
      {board.map((row, rowIndex) => {
        return (
          <div className="row" key={`row-${rowIndex}`}>
            {row.map((col, colIndex) => {
              return (
                <div
                  className="col"
                  key={`${rowIndex}-${colIndex}`}
                  onClick={() => handleClick(rowIndex, colIndex)}
                >
                  {col}
                </div>
              );
            })}
          </div>
        );
      })}
      <p>
        {winner ? `winner is: ${winner}` : `Player Turn: ${xTurn ? "X" : "O"}`}
      </p>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default TicTac;
