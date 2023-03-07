import React from "react";
// import Keyboard from "./Keyboard";

function GameTiles(props){
  const { word, gameBoard, guessedLetter, currentRow, currentTile, Keyboard } = props;

  const wordOfDay = ({word})

  const gameTile = (tile) =>{
    const gameBoardArray = [...gameBoard];
    const gameBoardRow = [...gameBoardArray[currentRow]]
    gameBoardRow[currentTile] = tile;
    return gameBoardRow[currentTile]
  }
  const modifiedGameBoard = gameTile(guessedLetter);
console.log(modifiedGameBoard);

  
return (
  <div className="gameboard tc">
  { gameTile }
  { wordOfDay }
  {/* <Keyboard 
    guessedLetter={this.guessedLetter}
  />  */}
  </div>
)
  //gameBoard.map to each individual tile ==== gameTile


  //variable of endGame = (the word of day) =>{
    //if gameTile.each === "s u p e r" THEN
    //isGameOver === true
  //}

  //variable of coloring tiles = (guessedLetter, indexoftile) => {
    //if guessed letter index === index of wordOfDay index THEN
    //gameTile index === 'green'
    //ELSE if guessed letter index === in wordOfDay index THEN
    //gameTile index === 'yellow'
    //ELSE keyClicked === can be used and TILE === grey
  //}

}
export default GameTiles;

// coloured tiles dependent on letter chosen:
// green tile if letter is in right tile
// yellow tile if letter is in a tile but wrong position
// grey if letter is not in the word

// need to add unavailibilty of keyboard letter if letter is not in keyboard 

// end game if letters === wordOfDay

//need to add color and font to tiles letters 

// function GameTiles(props) {
//   const { word, gameBoard, guessedLetter } = props;

//   const isGameOver = gameBoard[gameBoard.length - 1].every((tile) =>
//     tile !== "" ? word.includes(tile.toLowerCase()) : false
//   );

//   const getTileColor = (letter, tileIndex) => {
//     const correctLetter = word[tileIndex];
//     const guessedLetterIndex = gameBoard.findIndex(
//       (row) => row.includes(letter.toUpperCase())
//     );
//     const guessedLetterTileIndex = gameBoard[guessedLetterIndex].indexOf(
//       letter.toUpperCase()
//     );

//     if (guessedLetterTileIndex === tileIndex) {
//       return "green";
//     } else if (correctLetter === letter.toLowerCase()) {
//       return "yellow";
//     } else {
//       return "default";
//     }
//   };

//   const rowsOnGameBoard = gameBoard.map((row, rowIndex) => (
//     <div key={rowIndex} className="row">
//       {row.map((tile, tileIndex) => (
//         <GameTile
//           key={tileIndex}
//           tile={tile}
//           color={getTileColor(tile, tileIndex)}
//         />
//       ))}
//     </div>
//   ));

//   function GameTile(props) {
//     const { tile, color } = props;

//     return (
//       <div className={`box ${color}`}>
//         {tile === "" ? "" : tile.toUpperCase()}
//       </div>
//     );
//   }

//   return (
//     <div className="gameboard tc">
//       {rowsOnGameBoard}
//       <Keyboard guessedLetter={guessedLetter} getTileColor={getTileColor} />
//       {isGameOver && <h2>Game Over!</h2>}
//     </div>
//   );
// }