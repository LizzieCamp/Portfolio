import React, { useRef, useState } from "react";
import "../Styles/styles";
import Button from "./Button";
import FormInput from "./FormInput";
import emailjs from "@emailjs/browser";
import Success from "./Success";

const Form = (props) => {
  const form = useRef();
  const [submit, setSubmit] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);

    emailjs
      .sendForm(
        "service_celav5e",
        "template_gvrci9b",
        form.current,
        "bMoALCYnJGcbG4-W9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setSubmit(true);
  };

  return (
    <div>
      {!submit ? (
        <form ref={form} onSubmit={sendEmail} className="form">
          <FormInput name="user_name" type="text" placeholder="Name " />
          <FormInput name="user_email" type="email" placeholder="Email " />
          <textarea
            name="message"
            type="text"
            className="textArea"
            placeholder="Message "
          />
          <Button class="submitButton" buttonText="Submit" />
        </form>
      ) : (
        <Success />
      )}
    </div>
  );
};

export default Form;
