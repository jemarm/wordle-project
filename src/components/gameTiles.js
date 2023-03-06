// import React from "react";
// import Keyboard from "./keyboard";



// export default GameTiles;

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