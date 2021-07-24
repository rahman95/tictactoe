import React from "react";
import Box from "./Box";

const Row = ({ name, moves }) => {
  return (
    <div name={name} className="row">
      {[1, 2, 3].map((index) => (
        <Box name={`${name}-${index}`} moves={moves} />
      ))}
    </div>
  );
};

export default Row;
