import React from "react";
import "../Styles/styles";

export default (props) => {
  return (
      <button type="submit" className={props.class}>{props.buttonText}</button>
  );
};
