import React from "react";
import "../Styles/styles";
import Back from "../components/BackButton";
import Card from "../components/Card";


const projects = [{
  title: "Title of cool project",
  content: "This cool project be cool",
  image: "AvatarMaker.png"
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
    <div className="projects margins">
      <h1> Projects </h1>
      <div className="content">
        {projects.map((project, title) => (
          <Card  key={title} index={title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
