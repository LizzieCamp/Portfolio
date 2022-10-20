import React from "react";
import "../Styles/styles";

export default (props) => {
  return (
    <li className={props.itemClass}>
      <a aria-label={props.ariaLabel} target={props.target} rel={props.rel }href={props.href} className={props.linkClass}>
        {props.label}
      </a>
    </li>
  );
};
