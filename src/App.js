import React, { useEffect, useState } from "react";
import Row from "./components/Row";

function App() {
  const USER_X = 'X'
  const USER_O = 'O'

  const [activeUser, setActiveUser] = useState(USER_X)
  const [userWon, setUserWon] = useState('')
  const [winningMoves, setWinningMoves] = useState([])
  const [moves, setMoves] = useState({
    [USER_X]: [],
    [USER_O]: [],
  });

  const generateWinningMoves = () => {
    const winningMoves = []

    //handle horizontal
    winningMoves.push(['top-1','top-2','top-3'])
    winningMoves.push(['mid-1','mid-2','mid-3'])
    winningMoves.push(['bottom-1','bottom-2','bottom-3'])

    // handle vertical
    winningMoves.push(['top-1','mid-1','bottom-1'])
    winningMoves.push(['top-2','mid-2','bottom-2'])
    winningMoves.push(['top-3','mid-3','bottom-3'])

    //handle diagonal
    winningMoves.push(['top-1','mid-2','bottom-3'])
    winningMoves.push(['top-3','mid-2','bottom-1'])

    return winningMoves
  }

  useEffect(() => {
    setWinningMoves(generateWinningMoves())
  }, [])

  useEffect(() => {
    console.log(userWon)
  }, [userWon])

  const toggleNextUser = () => {
    const nextUser = activeUser === USER_X ? USER_O : USER_X
    setActiveUser(nextUser)
  }

  const checkIfWon = () => {
    winningMoves.find(winningMoveSet => {
      // check if O has won
      if(winningMoveSet.every(move => moves[USER_O].includes(move))) {
        setUserWon(USER_O)

        return true
      }

      // check if X has won
      if(winningMoveSet.every(move => moves[USER_X].includes(move))) {
        setUserWon(USER_X)

        return true
      }

      return false
    })
  }

  const selectBox = (boxName) => {
    const newMoves = {...moves}
    newMoves[activeUser].push(boxName)
    setMoves(newMoves)

    checkIfWon()
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
