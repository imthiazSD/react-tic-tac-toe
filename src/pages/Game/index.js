import React, { useState } from "react";
import Board from "../../components/Board";
import { updateCell } from "./game.helpers";
import "./game.css";

const DEFAULT_ROWS = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Game() {
  const [rows, setRows] = useState(DEFAULT_ROWS);
  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [moves, setMoves] = useState(0);

  const handleCellClick = (x, y) => {
    // return if the cell has already been marked
    if (rows[y][x]) {
      return;
    }
    setRows(updateCell(rows, x, y, isPlayerOne ? "X" : "O"));
    setIsPlayerOne(!isPlayerOne);
    setMoves(moves + 1);
  };

  return (
    <div className="game">
      <h1>{`${isPlayerOne ? "X" : "O"}'s turn`}</h1>
      <Board rows={rows} handleCellClick={handleCellClick} />
    </div>
  );
}
