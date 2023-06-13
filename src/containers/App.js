import "./App.css";
import GameBoard from "../components/gameboard/GameBoard"
import Keyboard from "../components/keyboard/Keyboard";
import { createContext, useState } from "react";
import { boardDefault } from "../components/words";

export const AppContext = createContext();

function App() {
  const [gameboard, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <h1 className="f1 bb bw2">Wordle Clone</h1>
      <div>
        <AppContext.Provider value={{ gameboard, setBoard }}> 
          <GameBoard />
          <Keyboard />
        </AppContext.Provider>
      </div>
    </div>
  );
}


export default App;
