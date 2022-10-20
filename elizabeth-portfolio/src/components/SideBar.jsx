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
      href: "#About",
      label: "About",
      ariaLabel: "Navigate to the about section"
    },
    {
      itemClass: "sideBarLink",
      href: "#Projects",
      label: "Projects",
      ariaLabel: "Navigate to the projects section"
    },
    {
      itemClass: "sideBarLink",
      href: "#Experience",
      label: "Experience",
      ariaLabel: "Navigate to the experience section"
    },
    {
      itemClass: "sideBarLink",
      href: "#Contact",
      label: "Contact",
      ariaLabel: "Navigate to the contact section"
    },
    {
      itemClass: "sideBarLink",
      href: PDF,
      label: "CV",
      target: "_blank",
      rel: "noreferrer",
      ariaLabel: "Dowload my CV"
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
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
