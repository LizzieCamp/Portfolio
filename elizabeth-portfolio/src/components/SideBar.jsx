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
    },
    {
      itemClass: "sideBarLink",
      href: "#Projects",
      label: "Projects",
    },
    {
      itemClass: "sideBarLink",
      href: "#Experience",
      label: "Experience",
    },
    {
      itemClass: "sideBarLink",
      href: "#Contact",
      label: "Contact",
    },
    {
      itemClass: "sideBarLink",
      href: PDF,
      label: "CV",
      target: "_blank",
      rel: "noreferrer",
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
