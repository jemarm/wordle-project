import React from "react";
import "./GameBoard.styles.css";

const GameBoard = ({ guesses }) => {
  console.log(Array.isArray(guesses));
  return (
    <div className="gameboard">
      {guesses.map((guesses, index) => (
        <div key={index} className="row">
          {guesses.map((tile, tileIndex) => (
            <div
              key={tileIndex}
              className='tile'
              style={{
                backgroundColor: tile.correct === true ? 'green' : tile.correct === false ? 'red' : 'white',
              }}
            >
              {tile.correct === null ? '' : tile.letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
