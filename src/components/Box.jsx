import React from "react";

const Box = ({ name, selected, value }) => {
  return (
    <div name={name} className="box">
      {selected && <span className="selected">{value.toUpperCase()}</span>}
    </div>
  );
};

export default Box;
