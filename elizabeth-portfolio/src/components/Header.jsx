import React from "react";
import "../Styles/styles";
import { FaBars } from "react-icons/fa";
import PDF from "../CV.pdf";
import ListLink from "./ListLink";
import ImageLink from "./ImageLink";

export default ({ toggle }, props) => {
  const navBarItems = [
    {
      href: "#About",
      linkClass: "navLink",
      label: "About",
    },
    {
      href: "#Projects",
      linkClass: "navLink",
      label: "Projects",
    },
    {
      href: "#Experience",
      linkClass: "navLink",
      label: "Experience",
    },
    {
      href: "#Contact",
      linkClass: "navLink",
      label: "Contact",
    },
    {
      href: PDF,
      linkClass: "navLink",
      label: "CV",
      target: "_blank",
      rel: "noreferrer",
    },
  ];

  return (
    <div className="nav">
      <div className="navContainer">
        <ImageLink
          href="#home"
          src="AvatarMaker.png"
          altText="Elizabeth Camp Portfolio"
          class="navLogo"
        />
        <div className="burgerMenu" onClick={toggle}>
          <FaBars />
        </div>
        <ul className="navMenu">
          {navBarItems.map((item, label) => (
            <ListLink key={label} index={label} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
