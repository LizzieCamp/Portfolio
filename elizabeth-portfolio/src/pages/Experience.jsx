import React from "react";
import "../Styles/styles";
import Card from "../components/Card";

const experience = [
  {
    title: "Elsevier",
    subTitle: "Software Engineer III · May 2022 - Present",
    content: "Working on the 'Next Gen' project, rebuilding the elsevier.com site. This involves working to design specifications, building out React components and content models in GraphQl.",
    subtitleTwo: "Software Engineer II · Sept 2020 - May 2022",
    additionalContent: "As an SE2 I worked more on improving; the Accessibility rating of Elsevier.com, the speed and performance metrics and the teams agile processes.",
    subtitleThree: "Technology Associate · Sept 2019 - Sept 2020",
    extraContent:
      "I joined Elsevier as part of their graduate scheme. I was placed in the Elsevier.com team. Where at the time my role was to maintain the Elsevier.com website and add small changes and improvements.",
  },
  {
    title: "Univeristy of Reading",
    subTitle: "Bsc Computer Science 2016-2019",
    subtitleTwo: "Grade: 2.1",
    subtitleThree: "Modules studied include:",
    extraContent: "Codes and code breaking · Algorithms and operating systems · Software Quality and Testing ·",
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
