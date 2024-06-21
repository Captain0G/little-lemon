import { fetchAPI, submitAPI } from "./Api";
import Nav from "./Nav";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { useReducer, useState } from "react";
import Main from "./Main";
import { useNavigate } from "react-router-dom";
function BookingPage() {
  const navigate = useNavigate("");

  const updateTimes = (availableTimes, action) => {
    console.log(action);
    availableTimes = fetchAPI(new Date(action.selectedDate));
    console.log(availableTimes);
    return availableTimes;
  };

  function submitForm(reservation) {
    if (submitAPI(reservation)) {
      navigate("/confirmed");
    }
  }

  let today = new Date();
  const initializeTimes = () => fetchAPI(today);
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    guests: 0,
    occasion: "",
  });

  return (
    <>
        <Nav />
      <Main>
        <BookingForm
          reservation={reservation}
          setReservation={setReservation}
          availableTimes={availableTimes}
          dispatch={dispatch}
          today={today}
          submitForm={submitForm}
        />
        
      </Main>
      <Footer />
    </>
  );
}

export default BookingPage;
