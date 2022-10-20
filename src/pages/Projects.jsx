import React from "react";
import "../Styles/styles";
import Card from "../components/Card";

const projects = [{
  title: "Movies API: 'to watch list'",
  content: "This project uses a Movie API (OMDb API) which allows users to create their own 'watch list'. A to do list style app where users add films to their 'to watch' list and can check them off - moving the film to their 'watched' list.",
  image: "placeholder-image.png",
  // altText:
  additionalContent: "React · Movie API · ",
  imageLink: "https://github.com/LizzieCamp",
  ariaLabel: "Go to the movie api projects github repository",
  imgSrc: "github.png",
  linkAltText: "Github"

},
{
  title: "Fight Club",
  content: "A CLI based fight simulator.",
  image: "placeholder-image.png",
  additionalContent: "Typescript",
  imageLink: "https://github.com/LizzieCamp",
  ariaLabel: "Go to the fight club projects github repository",
  imgSrc: "github.png",
  linkAltText: "Github"
},
{
  title: "Blog site",
  content: "A blog site where users can create, edit and delete their own blog posts.",
  additionalContent: "React · Sass/Scss · MongoDB",
  image: "placeholder-image.png",
  imageLink: "https://github.com/LizzieCamp",
  ariaLabel: "Go to the blog site projects github repository",
  imgSrc: "github.png",
  linkAltText: "Github"
},
{
  title: "Weather Reporter",
  content: "A simple weather reporting app which can: ",
  additionalContent: "React · GraphQL · Weather API",
  image: "placeholder-image.png",
  imageLink: "https://github.com/LizzieCamp",
  ariaLabel: "Go to the weather reporter projects github repository",
  imgSrc: "github.png",
  linkAltText: "Github"
}];

const Projects = () => {
  return (
    <div id="Projects" className="page margins">
      <h1> Projects </h1>
      <div className="content">
        {projects.map((project, title) => (
          <Card  class="projects" key={title} index={title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
