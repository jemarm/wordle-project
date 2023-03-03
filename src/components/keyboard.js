import React from "react";

function Keyboard(props) {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "<<"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "GO"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  // const keyClocked =

  const keyClicked = (letter, rowIndexOnKeyboard, tileIndexOnKeyboard) => {
    //props is from app.js
    props.guessedLetter(letter);
    props.setCurrentTile(rowIndexOnKeyboard, tileIndexOnKeyboard);
  };
  

  const rowsOnKeyboard = keys.map((rowIndexOnKeyboard, tileIndexOnKeyboard) => (
    <CreateKeyboardRows
    key={tileIndexOnKeyboard} 
    row={rowIndexOnKeyboard} 
    rowIndex={tileIndexOnKeyboard} 
    onClick={keyClicked} />
  ));

function CreateKeyboardRows(props) {
  return (
    <div className="tc">
      {props.row.map((letter, tileIndex) => (
        <KeyboardButton
          key={tileIndex}
          letter={letter}
          onClick={() => props.onClick(letter, props.rowIndex, tileIndex)}
        />
      ))}
    </div>
  );
}

function KeyboardButton(props) {
  return (
    <button
      className="tc ma2 pa3 bg-light-gray br3 w3 pointer hover-bg-moon-gray"
      onClick={props.onClick}
    >
      {props.letter.toUpperCase()}
    </button>
  );
}


  return <div className="flex flex-column justify-center">{rowsOnKeyboard}</div>;
}

export default Keyboard;

