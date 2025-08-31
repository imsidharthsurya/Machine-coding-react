export const checkWinner = (board, size) => {
  // check for row
  for (let i = 0; i < size; i++) {
    let symbol = board[i][0];
    let winner = true;
    if (symbol) {
      for (let j = 0; j < size; j++) {
        if (board[i][j] !== symbol) {
          winner = false;
          break;
        }
      }
      if (winner) return symbol;
    }
  }

  // check for col
  for (let j = 0; j < size; j++) {
    let symbol = board[0][j];
    let winner = true;
    if (symbol) {
      for (let i = 0; i < size; i++) {
        if (board[i][j] !== symbol) {
          winner = false;
          break;
        }
      }
      if (winner) return symbol;
    }
  }

  // check for main diagonal
  let winner = true;
  let symbol = board[0][0];
  if (symbol) {
    for (let i = 0; i < size; i++) {
      if (board[i][i] !== symbol) {
        winner = false;
        break;
      }
    }
    if (winner) return symbol;
  }

  // check for minor diagonal
  winner = true;
  symbol = board[0][size - 1];
  if (symbol) {
    for (let i = 0; i < size; i++) {
      if (board[i][size - i - 1] !== symbol) {
        winner = false;
        break;
      }
    }
    if (winner) return symbol;
  }
  return null;
};
