import React from "react";
import "../Styles/styles";
import Back from "../components/BackButton";
import Card from "../components/Card";

const projects = [{
  title: "title of cool project",
  content: "this cool project be cool"
},
{
  title: "wow another one",
  content: "wow again"
},
{
  title: "ok too many",
  content: "or is it too many"
}];

const Projects = () => {
  return (
    <div className="margins">
      <Back />
      <h1> Projects </h1>
      <div className="content">
        {projects.map((project, title) => (
          <Card key={title} index={title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
