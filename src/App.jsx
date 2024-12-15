import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pralines from "./components/Pralines";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <div className="container">
              <div id="home"></div>
              <Header />
              <Hero />
              <div id="about"></div>
              <About />
              <div id="contact"></div>
              <Contact />
              <Footer />
            </div>
          }
        />
        {/* Pralines Page */}
        <Route path="/pralines" element={<Pralines />} />
      </Routes>
    </Router>
  );
};

export default App;
