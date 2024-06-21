import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
test("Check reservation button rendered and clickable", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const button = screen.getByRole('button');
  fireEvent.click(button)
  expect (button).toBeEnabled();
});