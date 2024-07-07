import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("", async () => {
  render(<App />);

  expect(screen.getByRole("button")).toBeEnabled();
});
