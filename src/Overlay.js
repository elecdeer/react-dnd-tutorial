
import React from "react";

//ここの{color}はpropsを分割代入してる
const Overlay = ({color}) => {
  return (
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: 1,
      opacity: 0.5,
      backgroundColor: color
    }}/>
  )
};

export default Overlay