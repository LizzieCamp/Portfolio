import React, { useState } from "react";
import "../Styles/styles";
import { FaBars } from "react-icons/fa";
import PDF from "../CV.pdf";
import ListLink from "./ListLink";
import ImageLink from "./ImageLink";

export default ({ toggle }, props) => {
  const navBarItems = [
    {
      linkClass: "navLink",
      label: "About",
      ariaLabel: "Navigate to the about section",
      to: "About",
    },
    {
      linkClass: "navLink",
      label: "Projects",
      ariaLabel: "Navigate to the projects section",
      to: "Projects",
    },
    {
      linkClass: "navLink",
      label: "Experience",
      ariaLabel: "Navigate to the experience section",
      to: "Experience",
    },
    {
      linkClass: "navLink",
      label: "Contact",
      ariaLabel: "Navigate to the contact section",
      to: "Contact",
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
          <a
            aria-label="Download my CV"
            target="_blank"
            rel="noreferrer"
            href={PDF}
            className="navLink"
          >
            <p>CV</p>
          </a>
        </ul>
      </div>
    </div>
  );
};
