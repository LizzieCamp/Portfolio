import React from "react";
import "../Styles/styles";
import Back from "../components/BackButton";
import Card from "../components/Card";
const Projects = () => {
  return (
    <div className="margins">
      <Back />
        <h1> Projects </h1>
      <div className="content">
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  );
};

export default Projects;
