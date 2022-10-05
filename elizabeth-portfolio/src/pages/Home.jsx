import React from "react";
import "../Styles/styles";

const Home = () => {
  return (
    <div>
      <div className="padding home ">
        <h1 className="animated animatedFadeInUp fadeInUp introText">
          Hello.
          <br />
          Im Elizabeth.
          <br />A frontend Software Engineer.
        </h1>
        <img
          className="animated animatedFadeInUp delayed fadeInUp meImage"
          src="AvatarMaker.png"
          alt="elizabeth camp"
        />
      </div>
    </div>
  );
};

export default Home;
