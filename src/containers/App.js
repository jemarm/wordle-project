import { useState, useEffect } from "react";
import "./App.css";
import GameBoard from "../components/gameboard/GameBoard";

const App = () => {
  const [word, setWord] = useState("super");
  const [guess, setGuess] = useState(Array(5).fill(""));
  const [guesses, setGuesses] = useState([]);
  const [gameState, setGameState] = useState("inProgress");

  //Initialize the guesses state with an empty grid
  useEffect(() => {
    const initialGameBoard = Array(5).fill(null).map(() =>
      Array(5).fill({ letter: "", correct: null })
    );
    setGuesses(initialGameBoard);
  }, [])

  //update the current guess with the guessed letter
const handleGuess = (letter, index) => {
  const newGuess = [...guess];
  newGuess[index] = letter;
  setGuess(newGuess);
}

//compare the guess with the word and add to previous guesses
const submitGuess = () => {
  const result = guess.map((letter, index) => ({
    letter,
    correct: letter === word[index]
  }));
  setGuesses(...guesses, result)

  //check if the guess is correct
  if(guess.join("") === word){
    setGameState("won");
  }
}

  return (
    <div className="App">
      <h1 className="f1 bb bw2">Wordle Clone</h1>
      <div>
      <GameBoard guesses={guesses} />
        {/* <Keyboard guess={guess} handleGuess={handleGuess} />  */}
      </div>
    </div>
  );
};

export default App;
