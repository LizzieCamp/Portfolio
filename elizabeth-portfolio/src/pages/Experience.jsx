import React from "react";
import "../Styles/styles";
import Card from "../components/Card";

const experience = [
  {
    title: "Elsevier",
    subTitle: "Software Engineer III",
    content: "i am se3",
    subtitleTwo: "Software Engineer II",
    additionalContent: "i am se2",
    subtitleThree: "Technology Associate",
    extraContent:
      "i am tai am tai am ti am tai am tai am tai am tai am tai am tai am t i am tai am tai am tai am tai am tai am tai am tai am tai am tai am taai am ta",
  },
  {
    title: "Elsevier",
    subTitle: "Software Engineer III",
    content: "i am se3",
    subtitleTwo: "Software Engineer II",
    additionalContent: "i am se2",
    subtitleThree: "Technology Associate",
    extraContent: "i am ta",
  },
  {
    title: "Elsevier",
    subTitle: "Software Engineer III",
    content: "i am se3",
    subtitleTwo: "Software Engineer II",
    additionalContent: "i am se2",
    subtitleThree: "Technology Associate",
    extraContent: "i am ta",
  },
];

const Experience = () => {
  return (
    <div id="Experience" className="page margins">
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
