import React from "react";
import PropTypes from "prop-types";
import "./board.css";

export default function Board({ rows, handleCellClick }) {
  return (
    <div className="board" data-testid="board">
      {rows.map((row, yIndex) => {
        return (
          <div className="board-row" key={`row_${yIndex}`}>
            {row.map((rowItem, xIndex) => {
              return (
                <div
                  className="board-cell"
                  data-testid={`cell_${yIndex}-${xIndex}`}
                  key={`cell_${xIndex}`}
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

Board.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.array),
  handleCellClick: PropTypes.func,
};
