import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Board from "../index";

test("Clicking a cell calls cell click handler with arguments", () => {
  const rows = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const handleCellClick = jest.fn();
  const { getByTestId } = render(
    <Board rows={rows} handleCellClick={handleCellClick} />
  );

  const cell = getByTestId("cell_0-1"); // cell_y-x
  fireEvent.click(cell);
  expect(handleCellClick).toBeCalledWith(1, 0); // x,y
});

test("Board renders cell content", () => {
  const rows = [
    [null, "X", null],
    [null, null, null],
    [null, null, null],
  ];

  const { getByTestId } = render(<Board rows={rows} />);
  const cell = getByTestId("cell_0-1");
  expect(cell.textContent).toBe("X");
});
