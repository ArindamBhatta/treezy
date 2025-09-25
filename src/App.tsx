import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import BuyerPage from "./containers/BuyerPage";
import SellsPage from "./containers/sellerPage";
function App() {
  console.log(process.env.REACT_APP_APPWRITE_URL);

  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/buy" element={<BuyerPage />} />
          <Route path="/sells" element={<SellsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
