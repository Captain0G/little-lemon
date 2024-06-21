import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingPage from "./BookingPage";
import { fetchAPI, submitAPI } from "./Api";

jest.mock("./Api");
const availableTimes = ["17:00", "18:00", "19:00"];
describe("BookingPage Component", () => {
  beforeEach(() => {
    fetchAPI.mockClear();
    submitAPI.mockClear();
  });

  test("initializeTimes sets initial available times", () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    expect(fetchAPI).toHaveBeenCalledWith(new Date());
    expect(screen.getByLabelText("Choose time").options.length).toBe(3); // 3 times returned from fetchAPI
  });

  test("updateTimes updates available times", () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2024-06-20" },
    });

    expect(fetchAPI).toHaveBeenCalledTimes(2); // Initial call and update call
    expect(screen.getByLabelText("Choose time").options.length).toBe(3); // 3 times returned from fetchAPI
  });

  test("submitForm navigates on successful submission", () => {
     render(
      <BrowserRouter>
        <BookingPage availableTimes={availableTimes} />
      </BrowserRouter>
    );

    fireEvent.submit(screen.getByTestId("form"));

    expect(submitAPI).toHaveBeenCalled();
    expect(window.location.pathname).toBe("/confirmed");
  });
});
