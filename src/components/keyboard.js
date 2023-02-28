import React from "react";

function Keyboard(props){
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P","<<"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L","GO"],
    ["Z", "X", "C", "V", "B", "N", "M"],

  ]

  
  const buttons = keys.map((row, rowIndex) => (
    <div key={rowIndex} className="tc">
    {row.map((letter, tileIndex) => (
    <button 
    key={tileIndex} 
    className="tc ma2 pa3 bg-light-gray br3 w3 pointer hover-bg-moon-gray"
    onClick={() => {
      props.guessedLetter(letter)
      props.setCurrentTile(rowIndex, tileIndex);
    }}
    > 
    {letter.toUpperCase()}
    </button>
  ))}
  </div>
  ));  
  return <div className="flex flex-column justify-center"> {buttons} </div>

  
}
export default Keyboard