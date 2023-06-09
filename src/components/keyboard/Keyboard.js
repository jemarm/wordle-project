import React from 'react';
import './Keyboard.styles.css'


const Keyboard = ({ guess, handleGuess }) => {
  const keyboardArray = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '<'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'ENT'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  return (
    <div className='keyboard'>
    {keyboardArray.map((keyboardTile, rowIndex) => (
      <div key={rowIndex} className='keyboard-row'>
        {keyboardTile.map((letter, columnIndex) => (
          <button
          key={columnIndex}
          onClick={()=> handleGuess(letter, guess.length)}
          > 
          {letter}
          </button>
        ))}
      </div>
    ))}
    </div>
  );
}


export default Keyboard;





