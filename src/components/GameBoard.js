import React from "react";

const GameBoard = ({ gameBoard }) => {
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

  return <div className="tc">{wordleBoard}</div>;
};

export default GameBoard;
