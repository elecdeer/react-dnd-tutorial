

import React from "react";
import Square from "./Square";
import Knight from "./Knight";
import {canMoveKnight,moveKnight} from "./Game";


export default function Board({knightPosition}){
  const squares = [];

  for(let i = 0; i < 64; i++){
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <div style={{ width: '100px', height: '100px', display: 'flex', flexWrap: 'wrap'}}>
      {squares}
    </div>
  );
}


function handleSquareClick(toX, toY){
  if(canMoveKnight(toX, toY)){
    moveKnight(toX, toY);
  }
}


function renderSquare(i, [knightX, knightY]){
  const x = i%8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const isKnightHere = knightX === x && knightY === y;
  const piece = isKnightHere ? <Knight/>: null;

  return (
    <div onClick={() => handleSquareClick(x, y)} key={i} style={{ width: '12.5%', height: '12.5%'}}>
      <Square black={black}>
        {piece}
      </Square>
    </div>
  );
}