import React, { useState } from "react";
import Row from "./components/Row";

function App() {
  const USER_X = 'X'
  const USER_O = 'O'

  const [activeUser, setActiveUser] = useState(USER_X)
  const [moves, setMoves] = useState({
    [USER_X]: [],
    [USER_O]: [],
  });

  const toggleNextUser = () => {
    const nextUser = activeUser === USER_X ? USER_O : USER_X
    setActiveUser(nextUser)
  }

  const selectBox = (boxName) => {
    //check if available

    //if available set
    const newMoves = {...moves}
    newMoves[activeUser].push(boxName)
    setMoves(newMoves)

    toggleNextUser()
  }

  return (
    <div className="main">
      <div className="gameboard">
        <Row name="top" moves={moves} selectBox={selectBox} />
        <Row name="mid" moves={moves} selectBox={selectBox} />
        <Row name="bottom" moves={moves} selectBox={selectBox} />
      </div>
    </div>
  );
}

export default App;
