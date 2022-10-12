import React from "react";

const Line = ({ width, height }) => {
  const lineCss = {
    backgroundColor: "#37474F",
    width,
    height,
    borderRadius:"50px"
  };
  return <div style={lineCss} className="Line"></div>;
};

export default Line;
