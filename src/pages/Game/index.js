import React, { useState, useEffect } from "react";
import Board from "../../components/Board";
import { updateCell, getWinner } from "./game.helpers";
import { toast } from "react-toastify";
import "./game.css";

export default function Game() {
  const [rows, setRows] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [moves, setMoves] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // If moves is greater or equal to 5 run winner algo
    const winner = getWinner(rows);
    console.log("ROW");
    console.log("called");

    if (winner) {
      toast.error(`${winner} has won!`, { position: "top-center" });
      setFinished(true);
    }
  }, [rows]);

  useEffect(() => {
    if (moves >= 9) {
      const winner = getWinner(rows);
      setFinished(true);
      if (!winner) {
        toast.error("Its a draw!", { position: "top-center" });
      }
    }
  }, [moves]);

  useEffect(() => {
    if (finished) setMoves(0);
  }, [finished]);

  const resetBoard = () => {
    setRows([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setIsPlayerOne(true);
    setFinished(false);
  };

  const handleCellClick = (x, y) => {
    if (finished) return;
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
      <div>
        {finished ? (
          <button
            className="btn-play-again"
            data-testid="btn-reset"
            onClick={(e) => {
              resetBoard();
            }}
          >
            Play again
          </button>
        ) : (
          <h1>{`${isPlayerOne ? "X" : "O"}'s turn`}</h1>
        )}
      </div>
      <Board rows={rows} handleCellClick={handleCellClick} />
    </div>
  );
}
