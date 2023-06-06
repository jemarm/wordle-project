import { useState } from "react";
import "./App.css";
import GameBoard from "../components/gameboard/GameBoard";
import Keyboard from "../components/keyboard/Keyboard";

const App = () => {
  const [word, setWord] = useState("super");
  const [guess, setGuess] = useState(Array(5).fill(""));
  const [guesses, setGuesses] = useState([]);
  const [gameState, setGameState] = useState('inProgress');

  return (
    <div className="app">
      <h1 className="f1 bb bw2">Wordle Clone</h1>
      <div>
        <GameBoard />
        <Keyboard />
      </div>
    </div>
  );
};

export default App;
