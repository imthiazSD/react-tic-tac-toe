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
      const [a, b, c] = currentLine;
      if (
        rows[a[0]][a[1]] &&
        rows[a[0]][a[1]] === playerMark &&
        rows[a[0]][a[1]] === rows[b[0]][b[1]] &&
        rows[b[0]][b[1]] === rows[c[0]][c[1]]
      ) {
        return playerMark;
      }
    }
  }

  return winner;
}
