import React from "react";
import "../Styles/styles";
import { FaBars } from "react-icons/fa";
import PDF from "../CV.pdf";

export default ({ toggle }) => {
  return (
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
            <a target="_blank" rel="noreferrer" href={PDF} className="navLink">
              CV
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
