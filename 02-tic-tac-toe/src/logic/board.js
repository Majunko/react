import { WINNER_COMBOS } from '../constants.js';

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
      return boardToCheck[a];
    }
  }
  //no hay ganador
  return null;
};

export const checkEndGame = (boardToCheck) => {
  return boardToCheck.every((square) => square !== null);
};