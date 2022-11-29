import React from "react";
import Image from "../components/Image";
import "../Styles/styles";

const Home = () => {
  const titles = [
    { id: 1, title: "Hello." },
    { id: 2, title: "I'm Elizabeth." },
    { id: 3, title: "A Frontend Software Engineer." },
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
          altText="Cartoon of a girl with ginger hair which is resting on her left shoulder, wearing a black turtleneck jumper."
        />
      </div>
    </div>
  );
};

export default Home;


