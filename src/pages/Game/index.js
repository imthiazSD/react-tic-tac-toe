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
  const [finished, setFinished] = useState(false);

  const handleCellClick = (x, y, playerMark) => {
    setRows(updateCell(rows, x, y, playerMark));
    setIsPlayerOne(!isPlayerOne);
  };

  return (
    <div className="game">
      <h1>{`${isPlayerOne ? "X" : "O"}'s turn`}</h1>
      <Board
        rows={rows}
        handleCellClick={handleCellClick}
        isPlayerOne={isPlayerOne}
      />
    </div>
  );
}
