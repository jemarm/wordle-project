import React, { useContext } from "react";
import { AppContext } from "../containers/App";

function Letter({letterPos, attemptVal}) {
  const { gameboard } = useContext(AppContext);
  console.log(gameboard); // Add this line
  if (!gameboard || !gameboard[attemptVal]) {
    return null;
  }
  const letter = gameboard[attemptVal][letterPos];
  return <div className="letter">{letter}</div>;
}


export default Letter;

