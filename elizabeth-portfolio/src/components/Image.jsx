import React from "react";
import "../Styles/styles";

export default (props) => {
  return <img className={props.class} src={props.src} alt={props.altText} />;
};
