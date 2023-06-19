import React, { useContext, useEffect } from "react";
import { AppContext } from "../containers/App";

function Letter({ letterPos, attemptVal }) {
  const { gameboard, 
    correctWord, 
    currAttempt, 
    setDisabledLetters } = useContext(AppContext);
  const letter = gameboard[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter
  const almost = !correct && letter !== "" && correctWord.includes(letter)

  const letterState = currAttempt.attempt > attemptVal &&
  (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if(letter !== "" && !correct && !almost){
      setDisabledLetters((prev) => ([...prev, letter]))
    }
  }, [currAttempt.attempt])

  return ( 
  <div className="letter" id={letterState}>
  {" "}
  {letter}
  </div>
  )
}

export default Letter;
