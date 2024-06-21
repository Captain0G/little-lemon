import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";

import ConfirmationTable from "./ConfirmationTable";

export default function ConfirmedBooking() {
  const reservation = JSON.parse(localStorage.getItem("reservation")) || {};
  return (
    <>
      <Nav />
      <Main>
        <div className="confirmation">
          <h1>Booking Has Been Confirmed!</h1>
          <ConfirmationTable reservation={reservation} />
        </div>
      </Main>
      <Footer />
    </>
  );
}
