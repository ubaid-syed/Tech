import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./Screens/ContactPage/ContactPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-page" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
