import React, { useRef } from "react";
import "../Styles/styles";
import Form from "../components/Form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const resolution = window.innerWidth;

  const isDesktop = resolution >= 1024;

  return (
    <div className="margins">
      <h1> Contact </h1>
      <div className="content">
        <Form />
        {isDesktop ? <Form /> : undefined}
      </div>
    </div>
  );
};

export default Contact;
