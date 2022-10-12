import React from "react";

const Line = ({ width, height, backgroundColor }) => {
  const lineCss = {
    backgroundColor,
    width,
    height,
    borderRadius:"50px"
  };
  return <div style={lineCss} className="Line"></div>;
};

export default Line;
