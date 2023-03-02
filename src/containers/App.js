import React, { Component } from 'react';
import './App.css';
import Keyboard from '../components/keyboard';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "super",
      gameBoard:[
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ],
      guessedLetter: "",
      currentRow: 0,
      currentTile: 0,
      setCurrentTile: 0,
      guessesRemaining: 6,
      isGameOver: false 
    }
  }

 wordOfDay = (word) => {
  this.state({ word: word })
}

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

//gameBoard === guessedRows
//gameBoardArray === newRows
//gameBoardRow === newRow

//rewrite code for better feel and understandingzw
// guessedLetter = (letter) => {
//   console.log(letter)
//   const { guessedRows, currentRow, currentTile }  = this.state;
//   const newRows = [...guessedRows];
//   const newRow = [...newRows[currentRow]]
//   newRow[currentTile] = letter
//   newRows[currentRow] = newRow
//   console.log(newRow)
//   console.log(newRows)
//   this.setState({
//     guessedRows: newRows,
//     currentTile: currentTile < 4 ? currentTile + 1: 0,
//     currentRow: currentTile === 4 ? currentRow + 1: currentRow
//   });
// }

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
    const guessedLetter = this.guessedLetter;    
    const rows = gameBoard.map((row, rowIndex) => {
      const boxes = row.map((boxValue, colIndex) => (
        <div key={colIndex} className="box">
          {boxValue}
        </div>
      ));
      return (
        <div key={rowIndex} className="row">
        {boxes}
        </div>
      );
    });

  return (
    <div className="tc">
      <h1 className="f1 bb bw2">Wordle Clone</h1>
      <div className="gameboard tc">
        {rows}
        <Keyboard guessedLetter={ guessedLetter } setCurrentTile={ this.setCurrentTile} />
      </div>
    </div>
  );
}
}
export default App;


