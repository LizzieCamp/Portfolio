import React from "react";
import "../Styles/styles";
import Back from "../components/BackButton";
import Card from "../components/Card";

const experience = [{
  title: "Elsevier",
  subTitle: "Software Engineer III",
  content: "i am se3",
  subTitle1: "Software En gineer II",
  content1: "i am se2",
  subTitle2: "Technology Associate",
  content2: "i am ta"
}];



const Experience = () => {
  return (
    <div className="margins">
      <Back />
      <h1> Experience </h1>
      <div className="padding">
        {experience.map((job, subTitle) => (
          <Card key={subTitle} index={subTitle} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Experience;