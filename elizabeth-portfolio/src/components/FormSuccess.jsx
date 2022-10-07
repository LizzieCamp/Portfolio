import React from "react";
import "../Styles/styles";
import Image from "./Image";

export default () => {
  return (
    <div className="form">
      <Image class="checkMark" src="check-mark.png" altText="Elizabeth Camp" />
      <p> Thank You! </p>
      <p> The form was submitted successfully. </p>
    </div>
  );
};
