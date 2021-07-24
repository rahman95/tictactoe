import React, { useState } from "react";
import Row from "./components/Row";

function App() {
  const [moves, setMoves] = useState({
    X: ["top-1", "mid-2", "bottom-1"],
    O: ["top-2", "mid-1", "bottom-3"],
  });

  return (
    <div className="main">
      <div className="gameboard">
        <Row name="top" moves={moves} />
        <Row name="mid" moves={moves} />
        <Row name="bottom" moves={moves} />
      </div>
    </div>
  );
}

export default App;
