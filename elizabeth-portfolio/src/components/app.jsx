import React, { useEffect, useState } from "react";
import "./styles.js";
import TypeWriterEffect from "react-typewriter-effect";


const App = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 7000);
  }, []);


  return (
    <div className="margins">
      <div className="padding">
        <TypeWriterEffect
          startDelay={100}
          cursorColor="#008000"
          multiText={[
            "Hello",
            "i'm Elizabeth",
            "a frontend software engineer.",
          ]}
          loop={true}
          nextTextDelay={500}
          typeSpeed={30}
        />
      </div>
      {isDisplayed && (
        <div className="scroll">
          <img height="50px" src="scroll-down.png" alt="BigCo Inc. logo" />
        </div>
      )}
    </div>
  );
};

export default App;
