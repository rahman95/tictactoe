import React, { useState, useEffect } from "react";

const Box = ({ name, moves, selectBox }) => {
  const [isSelected, setSelected] = useState(false)
  const [userIcon, setUserIcon] = useState("")

  useEffect(() => {
    if(moves.X.includes(name)) {
      setSelected(true)
      setUserIcon('X')
    }

    if(moves.O.includes(name)) {
      setSelected(true)
      setUserIcon('O')
    }
  }, [moves, name])

  const handleClick = () => {
    if(isSelected){
      return 
    }

    selectBox(name)
  }

  return (
    <div name={name} className="box" onClick={handleClick}>
      {isSelected && <span className={`selected ${userIcon === 'X' ? `x-selected` : `o-selected`}`}>{userIcon}</span>}
    </div>
  );
};

export default Box;
