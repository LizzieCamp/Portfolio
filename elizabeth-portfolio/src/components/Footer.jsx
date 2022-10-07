import React from "react";
import "../Styles/styles";
import Image from "./Image";
import ImageLink from "./ImageLink";

export default () => {
  return (
    <div className="footer">
      <ImageLink
        href="https://www.linkedin.com/in/elizabeth-camp-0366b8165/"
        class="logo"
        src="linkedin.png"
        altText="Linkedin"
      />
      <p> Copyright message</p>
      <ImageLink
        href="https://github.com/LizzieCamp"
        class="logo"
        src="github.png"
        altText="Github"
      />
    </div>
  );
};
