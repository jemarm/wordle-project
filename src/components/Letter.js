import React, { useContext } from "react";
import { AppContext } from "../containers/App";

function Letter({ letterPos, attemptVal }) {
  const { gameboard, correctWord, currAttempt } = useContext(AppContext);
  if (!gameboard || !gameboard[attemptVal]) {
    return null;
  }
  const letter = gameboard[attemptVal][letterPos];
  const correct = correctWord[letterPos] === letter
  const almost = !correct && letter !== "" && correctWord.includes(letter)

  const letterState = currAttempt.attempt > attemptVal &&
  (correct ? "correct" : almost ? "almost" : "error");

  return (
  <div className="letter" id={letterState}>
  {" "}
  {letter}
  </div>
  )
}

export default Letter;
