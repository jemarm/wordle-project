import "./App.css";
import GameBoard from "../components/gameboard/GameBoard";
import Keyboard from "../components/keyboard/Keyboard";
import { createContext, useEffect, useState } from "react";
import { boardDefault, generateWordSet } from "../components/words";
import GameOver from "../components/GameOver";

export const AppContext = createContext();

function App() {
  const [gameboard, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState("")
  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false})

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet)
      setCorrectWord(words.todaysWord)
    })
}, [])

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

    let currWord = "";
    for(let i = 0; i < 5; i++){
      currWord += gameboard[currAttempt.attempt][i];
    }
    if(wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Word Not Found")
    }
    if(currWord === correctWord){
      setGameOver({gameOver: true, guessedWord: true})
      return;
    }

    if(currAttempt.attempt === 5){
      setGameOver({gameOver: true, guessedWord: false})
    }
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
          correctWord,
          setDisabledLetters,
          disabledLetters,
          setGameOver,
          gameOver,
        }}
      >
        <div className="game">
          <GameBoard />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
