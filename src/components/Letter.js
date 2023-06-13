import React, { useContext } from "react";
import { AppContext } from "../containers/App";

function Letter({letterPos, attemptVal}) {
  const { gameboard } = useContext(AppContext)
  const letter = gameboard[attemptVal][letterPos];
  return <div className="letter">{letter}</div>
}

export default Letter;

// function Letter({ letterPos, attemptVal }) {
//   const { gameboard } = useContext(AppContext);

//   // Check if the attemptVal index is within the range of the gameboard array
//   if (attemptVal >= gameboard.length || attemptVal < 0) {
//     return null; // Return null or handle the error condition
//   }

//   const attemptRow = gameboard[attemptVal];

//   // Check if the letterPos index is within the range of the attemptRow array
//   if (letterPos >= attemptRow.length || letterPos < 0) {
//     return null; // Return null or handle the error condition
//   }

//   const letter = attemptRow[letterPos];
//   return <div className="letter">{letter}</div>;
// }

// export default Letter;
