import "./App.css";
import GameBoard from "../components/gameboard/GameBoard"
import Keyboard from "../components/keyboard/Keyboard";
import { createContext, useState } from "react";
import { boardDefault } from "../components/words"

export const AppContext = createContext();

function App() {
  const [gameboard, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav>
        <h1>Wordle Clone</h1>
      </nav>
        <AppContext.Provider value={{ gameboard, setBoard }}> 
        <div className="game">
          <GameBoard />
          <Keyboard />
        </div>
        </AppContext.Provider>
      </div>
  );
}


export default App;
