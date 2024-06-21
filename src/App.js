
import './App.css';
import {Routes , Route} from "react-router-dom";
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
function App() {

  return (
    <>
    
    <Routes>

    <Route path="/" element={<HomePage />}/>
    <Route path="/booking" element={<BookingPage />}/>
    <Route path="/confirmed" element={<ConfirmedBooking />}/>


    </Routes>

    </>
  );
}

export default App;
