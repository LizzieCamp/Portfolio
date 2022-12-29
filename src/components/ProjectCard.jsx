import React from "react";
import "../Styles/styles";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "./Image";
import ImageLink from "./ImageLink";

const ProjectCard = (props) => {
  return (
    <AnimationOnScroll
      animateIn="animate__animated animate__zoomIn animate__slower"
      animateOnce="true"
    >
      <div
        className="container"
        style={{ backgroundImage: `url(${props.background})` }}
      >
        <div className="overlay">
          <div className="items">
            <p>{props.status}</p>
          </div>
          <div className="items heading">
            <h2>{props.projectName}</h2>
            <h4>{props.subTitle}</h4>
            <hr />
          </div>
          <div className="items projectContent">
            <ImageLink
              ariaLabel={props.ariaLabel}
              href={props.githubLink}
              class="cardLinkImage"
              src={props.imgSrc}
              altText={props.linkAltText}
            />
            <p>{props.languages}</p>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default ProjectCard;
