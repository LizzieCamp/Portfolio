import React from "react";
import "../Styles/styles";

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <h1>title</h1>
      </div>
      <h3>sub heading</h3>
      <p>contecontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentnt</p>
      {/* eventually this image will be the imageIcon component */}
      <a href={props.imageLink}>
        <img height="50px" href={props.imgSrc} alt={props.altText}></img>
      </a>
    </div>
  );
};

export default Card;
