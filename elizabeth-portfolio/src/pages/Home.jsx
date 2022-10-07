import React from "react";
import Image from "../components/Image";
import "../Styles/styles";

const Home = () => {
  const titles = [
    { id: 1, title: "Hello." },
    { id: 2, title: "Im Elizabeth." },
    { id: 3, title: "A frontend Software Engineer." },
  ];

  return (
    <div>
      <div id="home" className="padding home ">
        <div className="animated animatedFadeInUp fadeInUp introText">
          {titles.map((title, id) => (
            <h1 key={id} index={id} className="title">
              {title.title}
            </h1>
          ))}
        </div>
        <Image
          class="animated animatedFadeInUp delayed fadeInUp meImage"
          src="AvatarMaker.png"
          altText="Elizabeth Camp"
        />
      </div>
    </div>
  );
};

export default Home;
