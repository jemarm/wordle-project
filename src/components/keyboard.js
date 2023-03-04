import React from "react";

function Keyboard(props) {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "<<"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "GO"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];


  const keyClicked = (letter, rowIndexOnKeyboard, tileIndexOnKeyboard) => {
    //props is from app.js
    props.guessedLetter(letter);
    props.setCurrentTile(rowIndexOnKeyboard, tileIndexOnKeyboard);
  };
  

  const keyClickedToTile = keys.map((rowIndexOnKeyboard, tileIndexOnKeyboard) => (
    <KeyboardRows
    key={tileIndexOnKeyboard} 
    row={rowIndexOnKeyboard} 
    rowIndex={tileIndexOnKeyboard} 
    onClick={keyClicked} />
  ));

function KeyboardRows(props) {
  return (
    <div className="tc">
      {props.row.map((letter, tileIndex) => (
        <KeyboardButtons
          key={tileIndex}
          letter={letter}
          onClick={() => props.onClick(letter, props.rowIndex, tileIndex)}
        />
      ))}
    </div>
  );
}

function KeyboardButtons(props) {
  return (
    <button
      className="tc ma2 pa3 bg-light-gray br3 w3 pointer hover-bg-moon-gray"
      onClick={props.onClick}
    >
      {props.letter.toUpperCase()}
    </button>
  );
}


  return <div className="flex flex-column justify-center">{keyClickedToTile}</div>;
}

export default Keyboard;

