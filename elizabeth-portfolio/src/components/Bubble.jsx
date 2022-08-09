import React from "react";
import "../Styles/styles";
import { Link } from "react-router-dom";

const Bubble = (props) => {
  return (
    <div className={props.classes}>
      <nav>
        {props.route ? (
          <Link href={props.link} className="textPadding" to={props.route}>
            {props.message}
          </Link>
         ) : <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="textPadding"
      >
        {props.message}
      </a> }
        
      </nav>

      {/* <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="textPadding"
      >
        {props.message}
      </a> */}
    </div>
  );
};

export default Bubble;
