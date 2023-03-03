import React, { Component } from "react";
import "./App.css";
import Keyboard from "../components/keyboard";

class App extends Component {
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
      guessedLetter: "",
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
    
    setCurrentTile = (rowIndex, tileIndex) => {
      const { currentRow, currentTile } = this.state;
      if(rowIndex === currentRow && tileIndex === currentTile +1){
        this.setState({
          currentTile: tileIndex
        });
      } else if(rowIndex === currentRow + 1 && tileIndex === 0){
        this.setState({
          currentRow: rowIndex,
          currentTile: tileIndex,
        })
      }
    }
    

  render() {
    const { gameBoard } = this.state;
    const wordleBoard = gameBoard.map((gameBoardRow, gameBoardRowIndex) => {
      const gameTiles = gameBoardRow.map((gameTile, gameTileIndex) => (
        <div key={gameTileIndex} className="box">
          {gameTile}
        </div>
      ));
      return (
        <div key={gameBoardRowIndex} className="row">
          {gameTiles}
        </div>
      );
    });

    return (
      <div className="tc">
        <h1 className="f1 bb bw2">Wordle Clone</h1>
        <div className="gameboard tc">
          {wordleBoard}
          <Keyboard
            guessedLetter={this.guessedLetter}
            setCurrentTile={this.setCurrentTile}
          />
        </div>
      </div>
    );
  }
}
export default App;
