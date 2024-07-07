import { render, screen, waitFor } from "@testing-library/react";
import userEventOrg from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

const userEvent = userEventOrg;

test("The page can render", async () => {
  render(<App />);

  const countButton = screen.getByRole("button");
  expect(countButton).toBeEnabled();
  expect(countButton).toHaveTextContent("count is 0");

  userEvent.click(countButton);
  await waitFor(() => {
    jest.runOnlyPendingTimers();
  });
  expect(countButton).toHaveTextContent("count is 1");
});
