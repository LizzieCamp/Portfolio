import React from "react";
import "../Styles/styles";
import Card from "../components/Card";
import Image from "../components/Image";

const aboutInfo = [
  {
    title: "Hello 👋🏻 ",
    content:
      "Im Elizabeth, a frontend software Engineer, currently working for Elsevier.",
    additionalContent:
      "I first started learning to code in 2014, mostly self taught and a little through my Computing A-level. I ended up enjoying it so much that in 2016 I went on to study Computer Science at University, and have been working professionally as a Software Engineer for the past 3 years.",
    extraContent:
      "When i'm not developing my Sotware Engineering skills, you'll find me at the gym, stuck in a book or doing some yoga.",
  },
];

const About = () => {
  return (
    <div id="About" className="about page margins">
      <h1> About </h1>
      <div className="content aboutPage">
        {aboutInfo.map((about, title) => (
          <Card class="About" key={title} index={title} {...about} />
        ))}
        <Image class="aboutImage" src="aboutMe.png" altText="Elizabeth Camp" />
      </div>
    </div>
  );
};

export default About;
