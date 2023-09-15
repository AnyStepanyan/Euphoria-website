import React from "react";

const ColorList = ({ colors }) => {
  return (
    <div>
      {colors.map((color, index) => (
        <div key={index}>{color.value}</div>
      ))}
    </div>
  );
};

export default ColorList;
