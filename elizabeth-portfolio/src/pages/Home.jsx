import React from "react";
import "../Styles/styles";
import Bubble from "../components/Bubble";
import PDF from "../CV.pdf";

const Home = () => {
  return (
    <div className="margins">
      <div className="padding home">
        <img className="meImage" src="meCircle.png" alt="Picture of girl" />
        <a href="https://github.com/LizzieCamp">
          <img className="github" src="github.png" alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/elizabeth-camp-0366b8165/">
          <img className="linkedin" src="linkedin.png" alt="Linkedin logo" />
        </a>
        <Bubble
          route="/experience"
          classes="circle experience"
          message="Experience"
        ></Bubble>
        <Bubble route="/about" classes="circle about" message="About"></Bubble>
        <Bubble
          target="_blank"
          rel="noreferrer"
          classes="circle cv"
          message="cv"
          link={PDF}
        ></Bubble>
        <Bubble classes="circle contact" message="Contact"></Bubble>
        <Bubble
          route="/projects"
          classes="circle projects"
          message="Projects"
        ></Bubble>
      </div>
    </div>
  );
};

export default Home;
