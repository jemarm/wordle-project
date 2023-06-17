import "./App.css";
import GameBoard from "../components/gameboard/GameBoard";
import Keyboard from "../components/keyboard/Keyboard";
import { createContext, useState } from "react";
import { boardDefault } from "../components/words";

export const AppContext = createContext();

function App() {
  const [gameboard, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...gameboard];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...gameboard];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
  };

  return (
    <div className="App">
      <nav>
        <h1>Wordle Clone</h1>
      </nav>
      <AppContext.Provider
        value={{
          gameboard,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
        }}
      >
        <div className="game">
          <GameBoard />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
