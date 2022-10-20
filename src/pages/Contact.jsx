import React from "react";
import "../Styles/styles";
import Form from "../components/Form";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "../components/Image";

const Contact = () => {
  return (
    <div id="Contact"className="page margins">
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
          <Image
            class="aboutImage"
            src="AvatarMaker.png"
            altText="Elizabeth Camp"
          />
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Contact;
