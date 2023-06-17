import React, { useContext } from "react";
import { AppContext } from "../containers/App";


function Key({keyVal, bigKey}) {
  const {onSelectLetter, onEnter, onDelete, } = useContext(AppContext);

  const selectLetter = () => {
      if (keyVal === "ENTER"){
        onEnter()
      }else if(keyVal === "DELETE") {
        onDelete()
      }else {
        onSelectLetter(keyVal)
      }
      console.log(onSelectLetter)
  }
  return (
  <div className="key" id={bigKey && "big"} onClick={selectLetter}>
    {keyVal}
  </div>
  )
}

export default Key
