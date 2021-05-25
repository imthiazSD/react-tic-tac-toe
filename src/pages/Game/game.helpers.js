export function updateCell(rows, x, y, data) {
  return rows.map((row, index) => {
    if (index === y && !row[x]) {
      row[x] = data;
    }
    return row;
  });
}

export function getWinner(rows) {
  let winner = null;
  let players = ["X", "O"];

  return winner;
}
