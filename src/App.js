import React, { useState } from "react";
import Row from "./components/Row";

function App() {
  const [moves, setMoves] = useState({
    X: ["top-1", "mid-2", "bottom-1"],
    O: ["top-2", "mid-1", "bottom-3"],
  });

  // const relevantMoves = moves.flatMap((user) => {
  //   return user.map((move) => {
  //     return { [move]: user };
  //   });
  // });

  // console.log({ relevantMoves });

  return (
    <div className="w-full h-full flex justify-center">
      <div
        id="gameboard"
        className="flex flex-col border-2 border-black m-1 w-1/2"
      >
        <Row name="top" moves={moves} />
        <Row name="mid" moves={moves} />
        <Row name="bottom" moves={moves} />
      </div>
    </div>
  );
}

export default App;
