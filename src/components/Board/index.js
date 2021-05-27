import React from "react";
import "./board.css";

export default function Board({ rows, handleCellClick, isPlayerOne }) {
  return (
    <div className="board">
      {rows.map((row, yIndex) => {
        return (
          <div className="board-row">
            {row.map((rowItem, xIndex) => {
              return (
                <div
                  className="board-cell"
                  onClick={(e) => handleCellClick(xIndex, yIndex)}
                >
                  <p>{rowItem || ""}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
