import React from "react";
import "../Styles/styles";
import Card from "../components/Card";

const projects = [
  {
    title: "Fight Club",
    content: "A CLI based fight simulator.",
    image:
      "https://images.unsplash.com/photo-1601039834076-c41cf1766d4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    additionalContent: "Typescript",
    imageLink: "https://github.com/LizzieCamp/fight-club",
    ariaLabel: "Go to the fight club projects github repository",
    imgSrc: "github.png",
    status: "In progress",
    linkAltText: "Github",
  },
  {
    title: "The Watch List",
    content:
      "This project uses a Movie API (OMDb API) which allows users to create their own 'watch list'. A to do list style app where users add films to their 'to watch' list and can check them off - moving the film to their 'watched' list.",
    image:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    // altText:
    additionalContent: "React · Movie API · ",
    imageLink: "https://github.com/LizzieCamp/MovieAPI",
    ariaLabel: "Go to the movie api projects github repository",
    imgSrc: "github.png",
    status: "Coming soon",
    linkAltText: "Github",
  },
  {
    title: "Blog site",
    content:
      "A blog site where users can create, edit and delete their own blog posts.",
    additionalContent: "React · Sass/Scss · MongoDB",
    image:
      "https://images.unsplash.com/photo-1502465771179-51f3535da42c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    imageLink: "https://github.com/LizzieCamp",
    ariaLabel: "Go to the blog site projects github repository",
    imgSrc: "github.png",
    status: "Coming soon",
    linkAltText: "Github",
  },
  {
    title: "Weather Reporter",
    content: "A simple weather reporting app.",
    additionalContent: "React · GraphQL · Weather API",
    image:
      "https://images.unsplash.com/photo-1566996675874-f00a61522322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80",
    imageLink: "https://github.com/LizzieCamp",
    ariaLabel: "Go to the weather reporter projects github repository",
    imgSrc: "github.png",
    status: "Coming soon",
    linkAltText: "Github",
  },
];

const Projects = () => {
  return (
    <div id="Projects" className="page margins">
      <h1> Projects </h1>
      <div className="content">
        {projects.map((project, title) => (
          <Card class="projects" key={title} index={title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
