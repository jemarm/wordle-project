import React from "react";

function Keyboard(props) {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "<<"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "GO"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const handleButtonClick = (letter, rowIndex, tileIndex) => {
    props.guessedLetter(letter);
    props.setCurrentTile(rowIndex, tileIndex);
  };


  const keyboardRows = keys.map((row, rowIndex) => (
    <KeyboardRow 
    key={rowIndex} 
    row={row} 
    rowIndex={rowIndex} 
    onClick={handleButtonClick} />
  ));

function KeyboardRow(props) {
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


  return <div className="flex flex-column justify-center">{keyboardRows}</div>;
}

export default Keyboard;

