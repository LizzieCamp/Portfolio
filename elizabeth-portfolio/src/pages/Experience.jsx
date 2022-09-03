import React from "react";
import "../Styles/styles";
import Back from "../components/BackButton";
import Card from "../components/Card";

const experience = [{
  title: "Elsevier",
  subTitle: "Software Engineer III",
  content: "i am se3",
  subtitleTwo: "Software Engineer II",
  additionalContent: "i am se2",
  subtitleThree: "Technology Associate",
  extraContent: "i am ta"
}];



const Experience = () => {
  return (
    <div className="experience margins">
      <h1> Experience </h1>
      <div className="content">
        {experience.map((job, subTitle) => (
          <Card key={subTitle} index={subTitle} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Experience;