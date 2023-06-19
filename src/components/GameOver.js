import React, {useContext} from "react";
import { AppContext } from "../containers/App";

function GameOver () {
  const {gameOver, currAttempt, correctWord} = useContext(AppContext)
  return (
    <div className="gameover">
    <h3>{gameOver.guessedWord ? "You Correctly guessed" : "You failed"} </h3>
    <h1> Correct Word: {correctWord}</h1>
    {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
    </div>
    )
}

export default GameOver