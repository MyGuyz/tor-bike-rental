
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BikeBookingPage from "./pages/BikeBookingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/booking" element={<BikeBookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
