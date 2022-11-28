import React from "react";
import "../Styles/styles";
import ImageLink from "./ImageLink";

export default () => {
  return (
    <div className="footer">
      <ImageLink
      ariaLabel="Visit my linkedin profile"
        href="https://www.linkedin.com/in/elizabeth-camp-0366b8165/"
        class="logo"
        src="linkedin.png"
        altText="Linkedin"
      />
      <p> Copyright © Elizabeth Camp 2022 </p>
      <ImageLink
      ariaLabel="Visit my github"
        href="https://github.com/LizzieCamp"
        class="logo"
        src="github.png"
        altText="Github"
      />
    </div>
  );
};
