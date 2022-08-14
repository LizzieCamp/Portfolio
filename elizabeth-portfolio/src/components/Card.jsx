import React from "react";
import "../Styles/styles";

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <h1>{props.title}</h1>
      </div>
      <h3>{props.subTitle}</h3>
      <p>{props.content}</p>
      <h3>{props.subTitle1}</h3>
      <p>{props.content1}</p>
      <h3>{props.subTitle2}</h3>
      <p>{props.content2}</p>
      {/* eventually this image will be the imageIcon component */}
      <a href={props.imageLink}>
        <img height="50px" href={props.imgSrc} alt={props.altText}></img>
      </a>
    </div>
  );
};

export default Card;
