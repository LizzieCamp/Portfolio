import React from "react";
import "../Styles/styles";
import Card from "../components/Card";

const aboutInfo = [{
  title: "Currently working in Elsevier",
  content: "Like the front end ",
}]

const About = () => {
  return (
    <div className="page margins">
      <h1> About </h1>
      <div className="content aboutPage">
      {aboutInfo.map((about, title) => (
      <Card class="About" key={title} index={title} {...about}/>
      ))}
      <img
          className="aboutImage"
          src="AvatarMaker.png"
          alt="elizabeth camp"
        />
      </div>
    </div>
  );
};

export default About;
