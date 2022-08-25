import React from "react";
import "../Styles/styles";

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <h4>{props.title}</h4>
      </div>
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
  );
};

export default Card;
