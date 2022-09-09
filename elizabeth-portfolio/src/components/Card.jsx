import React from "react";
import "../Styles/styles";
// import "animate.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Card = (props) => {
  return (
    <AnimationOnScroll
      animateIn="animate__animated animate__zoomIn animate__slower"
      animateOnce="true"
    >
      <div className="card">
        <div>
          <h4>{props.title}</h4>
        </div>
        {props.image && (
          <img className="image" src={props.image} alt="elizabeth camp" />
        )}
        <h5>{props.subTitle}</h5>
        <p>{props.content}</p>
        {props.subtitleTwo ? <h5>{props.subtitleTwo}</h5> : null}
        {props.additionalContent ? <p>{props.additionalContent}</p> : null}
        {props.subtitleThree ? <h5>{props.subtitleThree}</h5> : null}
        {props.extraContent ? <p>{props.extraContent}</p> : null}

        {/* <h5>{props.subTitle1}</h5>
      <p>{props.content1}</p>
      <h5>{props.subTitle2}</h5>
      <p>{props.content2}</p> */}
        {/* eventually this image will be the imageIcon component */}
        <a href={props.imageLink}>
          <img height="50px" href={props.imgSrc} alt={props.altText}></img>
        </a>
      </div>
    </AnimationOnScroll>
  );
};

export default Card;

{
  /* <AnimationOnScroll animateIn="animate__bounceIn">
  <h2>Some Text</h2>
</AnimationOnScroll>; */
}
