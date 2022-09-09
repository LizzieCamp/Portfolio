import React from "react";
import "../Styles/styles";
import { FaBars, FaTimes } from "react-icons/fa";

const NewHome = ({ toggle }) => {
  return (
    <div >
      {/* <nav>
        {(toggleMenu || screenWidth > 500) && (
          <ul className="list">
            <li className="items">Home</li>
            <li className="items">Services</li>
            <li className="items">Contact</li>
          </ul>
        )}

        <button onClick={toggleNav} className="btn">
          BTN
        </button>
      </nav> */}
      <div className="nav">
        <div className="navContainer">
          <div className="navLogo">LOGO</div>
          <div className="burgerMenu" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="navMenu">
            <li className="navItem">
              <a className="navLink">About</a>
            </li>
            <li className="navItem">
              <a className="navLink">Experience</a>
            </li>
            <li className="navItem">
              <a className="navLink">Projects</a>
            </li>
            <li className="navItem">
              <a className="navLink">Contact</a>
            </li>
            <li className="navItem">
              <a className="navLink">CV</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="padding home ">
        <h2 className="animated animatedFadeInUp fadeInUp introText">
          Hello.
          <br />
          Im Elizabeth.
          <br />A frontend Software Engineer.
        </h2>
        <img
          className="animated animatedFadeInUp delayed fadeInUp meImage"
          src="AvatarMaker.png"
          alt="elizabeth camp"
        />
        {/* <img className="scroll" height="25px" src="scroll-down.png" alt="BigCo Inc. logo" /> */}
      </div>
    </div>
  );
};

export default NewHome;
