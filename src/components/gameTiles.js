import React from "react";


function GameTiles() {
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
}

export default GameTiles;

