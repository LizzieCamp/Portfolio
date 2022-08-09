import React from "react";
import "../Styles/styles";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <div className="backButton">
      <Link to="/home">
        <p>&lt; back</p>
      </Link>
    </div>
  );
};

export default Back;
