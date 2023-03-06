import React, { Component } from "react";
import "./App.css";
import GameBoard from "../components/GameBoard";
import Keyboard from "../components/Keyboard";
// import GameTiles from "../components/gameTiles";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      word: "super",
      gameBoard: [
       ["", "", "", "", ""],
       ["", "", "", "", ""],
       ["", "", "", "", ""],
       ["", "", "", "", ""],
       ["", "", "", "", ""],
       ["", "", "", "", ""],
     ],
     guessedLetter: 0,
     currentRow: 0,
     currentTile: 0,
     setCurrentTile: 0,
     guessesRemaining: 6,
     isGameOver: false,
    };
  }

  wordOfDay = (word) => {
    this.state({ word: word });
  };


    guessedLetter = (letter) => {
      console.log(letter)
      const { gameBoard, currentRow, currentTile } = this.state;
      const gameBoardArray = [...gameBoard];
      const gameBoardRow = [...gameBoardArray[currentRow]]
      gameBoardRow[currentTile] = letter;
      gameBoardArray[currentRow] = gameBoardRow;
      console.log(gameBoardArray)
      console.log(gameBoardRow)
      this.setState({
        gameBoard: gameBoardArray,
        currentTile: currentTile < 4 ? currentTile + 1: 0,
        currentRow: currentTile === 4 ? currentRow + 1: currentRow
      });
    }

    setCurrentTile = (setRowIndex, setTileIndex) => {
      const { currentRow, currentTile } = this.state;
      if(setRowIndex === currentRow && setTileIndex  === currentTile + 1){
        this.setState({
          currentTile: setTileIndex
        });
      }else if(setRowIndex === currentRow + 1 && setRowIndex === 0){
        this.setState({
          currentRow: setRowIndex,
          currentTile: setTileIndex
        })
      }
    }

    render(){
      const { gameBoard } = this.state;

        return (
          <div className="tc">
              <h1 className="f1 bb bw2">Wordle Clone</h1>
            <div className="tc">
              <GameBoard  gameBoard={gameBoard}/>
              <Keyboard 
                guessedLetter={this.guessedLetter}
                setCurrentTile={this.setCurrentTile}
              /> 
            </div>
          </div>
        )
    }
}

export default App;
