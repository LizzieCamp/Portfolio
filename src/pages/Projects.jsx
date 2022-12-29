import React from "react";
import "../Styles/styles";
import Card from "../components/Card";
import ProjectCard from "../components/ProjectCard";


const projects = [
  {
    projectName: "Fight Club",
    subTitle: "A CLI based fight simulator.",
    background:
      "https://images.unsplash.com/photo-1601039834076-c41cf1766d4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    languages: "Typescript",
    githubLink: "https://github.com/LizzieCamp/fight-club",
    ariaLabel: "Go to the fight club projects github repository",
    imgSrc: "github.png",
    status: "In progress",
    linkAltText: "Github",
  },
  {
    projectName: "The Watch List",
    subTitle:
      "Create your own 'to watch' and 'favourites' lists from a Netlfix inspired app.",
    background:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    languages: "React · Movie API · ",
    githubLink: "https://github.com/LizzieCamp/MovieAPI",
    ariaLabel: "Go to the movie api projects github repository",
    imgSrc: "github.png",
    status: "Coming soon",
    linkAltText: "Github",
  },
  {
    projectName: "Captains blog",
    subTitle:
      "A blog site where users can create, edit and delete their own blog posts.",
    languages: "React · Sass/Scss · MongoDB",
    background:
      "https://images.unsplash.com/photo-1502465771179-51f3535da42c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    githubLink: "https://github.com/LizzieCamp",
    ariaLabel: "Go to the blog site projects github repository",
    imgSrc: "github.png",
    status: "Coming soon",
    linkAltText: "Github",
  },
  {
    projectName: "Weather Man",
    subTitle: "A simple weather reporting app.",
    languages: "React · GraphQL · Weather API",
    background:
      "https://images.unsplash.com/photo-1566996675874-f00a61522322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80",
    githubLink: "https://github.com/LizzieCamp",
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
      <div className="content projects">
        {projects.map((project, title) => (
          <ProjectCard key={title} index={title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
