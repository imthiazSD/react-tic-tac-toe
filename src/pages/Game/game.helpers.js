export function updateCell(rows, x, y, data) {
  return rows.map((row, index) => {
    if (index === y && !row[x]) {
      row[x] = data;
    }
    return row;
  });
}

//  0 0 0
//  0 0 0
//  0 0 0

export function getWinner(rows) {
  let winner = null;
  let players = ["X", "O"];
  const winningLines = [
    // array of arrays of arrays of y,x values
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [2, 0],
      [1, 1],
      [0, 2],
    ],
  ];

  for (let i = 0; i < winningLines.length; i++) {
    for (let j = 0; j < players.length; j++) {
      const playerMark = players[j];
      const currentLine = winningLines[i];
      const [cell1, cell2, cell3] = currentLine;
      if (
        rows[cell1[0]][cell1[1]] &&
        rows[cell1[0]][cell1[1]] === playerMark &&
        rows[cell1[0]][cell1[1]] === rows[cell2[0]][cell2[1]] &&
        rows[cell2[0]][cell2[1]] === rows[cell3[0]][cell3[1]]
      ) {
        return playerMark;
      }
    }
  }

  return winner;
}
