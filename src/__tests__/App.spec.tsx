import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("The page can render", async () => {
  render(<App />);

  expect(screen.getByRole("button")).toBeEnabled();
});
