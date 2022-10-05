import React, { useState } from "react";
import "./Styles/styles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import NewHome from "./pages/Home";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Header toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NewHome />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
