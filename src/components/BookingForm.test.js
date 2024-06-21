import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { submitAPI } from "./Api";

jest.mock("./Api");

const mockSetReservation = jest.fn();
const mockDispatch = jest.fn();
const reservation = {
  date: "2024-06-20",
  time: "19:00",
  guests: 2,
  occasion: "Birthday",
};

const availableTimes = ["17:00", "18:00", "19:00"];

describe("BookingForm Component", () => {
  beforeEach(() => {
    mockSetReservation.mockClear();
    mockDispatch.mockClear();
    submitAPI.mockClear();
  });

  test("renders form with initial values", () => {
    render(
      <BookingForm
        reservation={reservation}
        setReservation={mockSetReservation}
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={jest.fn()}
      />
    );

    expect(screen.getByLabelText("Choose date")).toHaveValue("2024-06-20");
    expect(screen.getByLabelText("Choose time")).toHaveValue("19:00");
    expect(screen.getByLabelText("Number of guests")).toHaveValue(2);
    expect(screen.getByLabelText("Occasion")).toHaveValue("Birthday");
  });

  test("handles input changes", () => {
    render(
      <BookingForm
        reservation={reservation}
        setReservation={mockSetReservation}
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={jest.fn()}
      />
    );

    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2024-06-21" },
    });

    expect(mockSetReservation).toHaveBeenCalledWith({
      ...reservation,
      date: "2024-06-21",
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD_RESERVATION",
      selectedTime: reservation.time,
      selectedDate: reservation.date,
    });
  });

  test("handles form submission", () => {
    const mockSubmitForm = jest.fn();
    render(
      <BookingForm
        reservation={reservation}
        setReservation={mockSetReservation}
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    fireEvent.submit(screen.getByTestId("form"));

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "reservation",
      JSON.stringify(reservation)
    );
    expect(mockSubmitForm).toHaveBeenCalledWith(reservation);
    expect(mockSetReservation).toHaveBeenCalledWith({
      date: "",
      time: "",
      guests: 0,
      occasion: "",
    });
  });
});
