import { getWinner, updateCell } from "../game.helpers";

test("updateCell upates the data of a cell", () => {
  const initialState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const finalState = [
    ["X", null, null],
    [null, null, null],
    [null, null, null],
  ];

  expect(updateCell(initialState, 0, 0, "X")).toEqual(finalState);
});

test("getWinner gets winner of the game", () => {
  const winner = "X";
  const board = [
    ["X", "O", "O"],
    [null, "X", null],
    [null, null, "X"],
  ];
  expect(getWinner(board)).toBe(winner);
});
