import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
