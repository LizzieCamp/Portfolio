import React, { useEffect, useState } from "react";
import "../Styles/styles";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom";

const Start = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 7000);
  }, []);

  return (
      <div className="padding">
        <div className="center">
          <TypeWriterEffect
            startDelay={100}
            cursorColor="#008000"
            multiText={[
              "Hello.",
              "I'm Elizabeth.",
              "A frontend Software Engineer.",
            ]}
            loop={true}
            nextTextDelay={500}
            typeSpeed={30}
          />
        </div>

        {isDisplayed && (
          <div className="scroll">
            <Link to="/home">
              <img height="25px" src="scroll-down.png" alt="BigCo Inc. logo" />
            </Link>
          </div>
        )}
      </div>
  );
};

export default Start;
