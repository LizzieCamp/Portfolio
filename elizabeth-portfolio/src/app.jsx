import React from "react";
import "./Styles/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
};

export default App;
