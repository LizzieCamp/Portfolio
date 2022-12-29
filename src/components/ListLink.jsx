import React from "react";
import "../Styles/styles";
import { Link } from "react-scroll";

export default (props) => {
  return (
    <li className={props.itemClass}>
      <Link
        activeClass="active"
        className={props.linkClass}
        to={props.label}
        spy={true}
        smooth={true}
        duration={500}
      >
        <p>{props.label}</p>
      </Link>
    </li>
  );
};
