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
      ariaLabel: "Navigate to the about section"

    },
    {
      href: "#Projects",
      linkClass: "navLink",
      label: "Projects",
      ariaLabel: "Navigate to the projects section"
    },
    {
      href: "#Experience",
      linkClass: "navLink",
      label: "Experience",
      ariaLabel: "Navigate to the experience section"
    },
    {
      href: "#Contact",
      linkClass: "navLink",
      label: "Contact",
      ariaLabel: "Navigate to the contact section"
    },
    {
      href: PDF,
      linkClass: "navLink",
      label: "CV",
      target: "_blank",
      rel: "noreferrer",
      ariaLabel: "Download my CV"
    },
  ];

  return (
    <div className="nav">
      <div className="navContainer">
        <ImageLink
        ariaLabel="Back to the home screen"
          href="#home"
          src="logo1.png"
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
