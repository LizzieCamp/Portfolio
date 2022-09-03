import React from "react";
import "../Styles/styles";
import { FaTimes } from "react-icons/fa";

const SideBar = ({ isOpen, toggle }) => {
  let customStyle = {};
  if (isOpen) {
    customStyle = {
      opacity: "0%",
      top: "100%",
    };
  }

  return (
    <div
      className="sideBar"
      isOpen={isOpen}
      onClick={toggle}
      style={customStyle}
    >
      <div className="closeIcon" onClick={toggle}>
        <FaTimes />
      </div>
      <div className="sideBarWrapper">
        <ul className="sideBarMenu">
          <li className="sideBarLink">
            <a>About</a>
          </li>
          <li className="sideBarLink">
            <a>Experience</a>
          </li>
          <li className="sideBarLink">
            <a>Projects</a>
          </li>
          <li className="sideBarLink">
            <a>Contact</a>
          </li>
          <li className="sideBarLink">
            <a>CV</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
