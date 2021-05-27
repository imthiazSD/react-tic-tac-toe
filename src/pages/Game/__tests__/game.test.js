import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Game from "../index";

test("Game renders Board component", () => {
  const { getByTestId } = render(<Game />);
  const board = getByTestId("board");
  expect(board).toBeInTheDocument();
});
