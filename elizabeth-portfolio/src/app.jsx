import React, { useState } from "react";
import "./Styles/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import NewHome from "./pages/NewHome";
import SideBar from "./components/SideBar";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NewHome toggle={toggle} />
      <Projects />
      <Experience />
    </div>
    // <Router>
    //   <Routes>
    //     <Route
    //       index
    //       element={
    //         <>
    //           <SideBar isOpen={isOpen} toggle={toggle} />
    //           <NewHome isOpen={isOpen} toggle={toggle} />{" "}
    //         </>
    //       }
    //     />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/experience" element={<Experience />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
