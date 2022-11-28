import React from "react";
import "../Styles/styles";
import Form from "../components/Form";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "../components/Image";
import Card from "../components/Card";

const contact = [{
  content: "Got a question, or just want to say hi?",
  additionalContent: "Feel free to get in touch with me by using this form and I will get back to you as soon as possible.",
  imgSrc: "https://images.unsplash.com/photo-1636193535246-a07cd0aa6fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
}]

const Contact = () => {
  return (
    <div id="Contact"className="page margins">
      <h1>Send me a message!</h1>
      
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
          {contact.map((info, subTitle) => (
          <Card class="contactImage" key={subTitle} index={subTitle} {...info} />
        ))}
          {/* <Image
            class="aboutImage"
            src="https://images.unsplash.com/photo-1636193535246-a07cd0aa6fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            altText="Elizabeth Camp"
          />
          <h4>Got a question, or just want to say hi?</h4>
      <h4>Feel free to get in touch with me by using the form below and I will get back to you as soon as possible.</h4> */}
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Contact;
