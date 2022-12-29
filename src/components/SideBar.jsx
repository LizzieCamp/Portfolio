import React from "react";
import "../Styles/styles";
import { FaTimes } from "react-icons/fa";
import PDF from "../CV.pdf";
import ListLink from "./ListLink";

const SideBar = ({ isOpen, toggle }) => {
  let customStyle = {};
  if (isOpen) {
    customStyle = {
      opacity: "0%",
      top: "100%",
    };
  }

  const navBarItems = [
    {
      itemClass: "sideBarLink",
      label: "About",
      ariaLabel: "Navigate to the about section",
      toggle: { toggle },
    },
    {
      itemClass: "sideBarLink",
      label: "Projects",
      ariaLabel: "Navigate to the projects section",
    },
    {
      itemClass: "sideBarLink",

      label: "Experience",
      ariaLabel: "Navigate to the experience section",
    },
    {
      itemClass: "sideBarLink",

      label: "Contact",
      ariaLabel: "Navigate to the contact section",
    },
  ];

  return (
    <div className="sideBar" onClick={toggle} style={customStyle}>
      <div className="closeIcon" onClick={toggle}>
        <FaTimes />
      </div>
      <div className="sideBarWrapper">
        <ul className="sideBarMenu">
          {navBarItems.map((item, label) => (
            <ListLink key={label} index={label} {...item} />
          ))}
          <a
            aria-label="Download my CV"
            target="_blank"
            rel="noreferrer"
            href={PDF}
            className="sideBarLink"
          >
            <p>CV</p>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
