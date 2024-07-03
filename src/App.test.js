import {render, fireEvent, screen} from '@testing-library/react'
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("Check reservation button rendered and clickable", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const reservationBtn = screen.getByText("Reserve a Table", {selector: "a"});
  expect(reservationBtn).toBeInTheDocument();
});

test("Check reservation routing", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
 
  const reservationBtn = screen.getByText("Reserve a Table", {selector: "a"});

  fireEvent.click(reservationBtn);
  expect(window.location.pathname).toBe("/booking");
  
});
