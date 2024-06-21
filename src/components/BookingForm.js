import { submitAPI } from "./Api";

const BookingForm = ({
  reservation,
  setReservation,
  availableTimes = [],
  dispatch,
  submitForm,
}) => {
  const changeHandler = (e) => {
    e.target.id === "date" &&
      dispatch({
        type: "ADD_RESERVATION",
        selectedTime: reservation.time,
        selectedDate: reservation.date,
      });
    setReservation({ ...reservation, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(reservation);
    localStorage.setItem("reservation", JSON.stringify(reservation));
    submitForm(reservation);
    setReservation({ date: "", time: "", guests: 0, occasion: "" });
  };
  return (
    <section style={{ backgroundColor: "#495E57" }}>
      <h1 className="ll-heading">Book a table</h1>
      <form
        style={{ display: "grid", gap: "20px" }}
        data-testid="form"
        onSubmit={submitHandler}
      >
        <label htmlFor="date">Choose date</label>
        <input
          onChange={changeHandler}
          value={reservation.date}
          type="date"
          id="date"
          required
        />
        <label htmlFor="time">Choose time</label>
        <select
          onChange={changeHandler}
          value={reservation.time}
          id="time"
          required
          placeholder="Choose a time"
        >
          {availableTimes.map((time, idx) => (
            <option key={time} value={time} data-testid={"time" + idx}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          onChange={changeHandler}
          value={reservation.guests}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          onChange={changeHandler}
          value={reservation.occasion}
          id="occasion"
          required
        >
          <option key={"chooseOccation"} value={""}>
            Choose an Occasion
          </option>
          <option key={"Birthday"} value="Birthday">
            {" "}
            Birthday
          </option>
          <option key={"Anniversary"} value="Anniversary">
            Anniversary
          </option>
        </select>
        <input type="submit" value="Book Now!" className="button"></input>
      </form>
    </section>
  );
};

export default BookingForm;
