import React from "react";
import "../Styles/styles";
import Form from "../components/Form";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact = () => {
  return (
    <div className="margins">
      <h1> Contact </h1>
      <div className="content">
        <AnimationOnScroll
          animateIn="animate__animated animate__slideInLeft animate__slower"
          animateOnce="true"
        >
          <Form />
        </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__animated animate__slideInRight animate__slower"
            animateOnce="true"
          >
            <img
              className="aboutImage"
              src="AvatarMaker.png"
              alt="elizabeth camp"
            />
          </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Contact;
