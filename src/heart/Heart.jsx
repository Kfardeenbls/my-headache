import React, { useState } from "react";
import img1 from "../assets/cutie1.png";
import img2 from "../assets/cutie4.png";
import heart from "../assets/heart.png";
import "./heart.css";
import ConsoleText from "../component/ConsoleText";

const Heart = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [letterCount, setLetterCount] = useState(1);
  const [showYes, setShowYes] = useState(false);

  const handleYesButtonClick = () => {
    setShowButtons(false); // Hide the buttons
    setLetterCount(0); // Reset letterCount to 1 to start typing the current word again
    // setImgCount(1);
    setShowYes(true); // Show the Yes button
    
  };

  const handleNoButtonClick = () => {};
  return (
    <div className={`first-view`}>
       
      <div>
        {!showYes && (
          <div className="heart-1">
            <div className="img-conatiner fade-in-out">
              <img className="img" src={img1} alt=""></img>
            </div>
            <ConsoleText
              words={[
                "When I met you, I found a piece of myself I didn't even know was missing. It felt like coming home after a long journey, like my heart had finally found its safe haven in you.",
                // "When I met you, ",
              ]}
              colors={["tomato", "rebeccapurple", "lightblue"]}
              showButtons={showButtons}
              updateButton={setShowButtons}
              //   setImgCount={setImgCount}
              letterCount={letterCount}
              updateLetterCount={setLetterCount}
            />
          </div>
        )}
        {showYes && (
          <div className="heart-1">
            <div className="img-conatiner fade-in-out">
              <img className="img" src={img2} alt=""></img>
            </div>
            <div className="sub-heading flex-gap">
              <h3>I love You</h3>
              <img src={heart} alt="" />
            </div>
            <ConsoleText
              words={[
                "I love you more than I've ever loved anyone or anything in my entire life.",
              ]}
              colors={["lightblue"]}
              showButtons={showButtons}
              updateButton={setShowButtons}
              //   setImgCount={setImgCount}
              letterCount={letterCount}
              updateLetterCount={setLetterCount}
              showYes={showYes}
            />
          </div>
        )}
      </div>
      {showButtons && (
        <div className="btn-area flex-gap ">
          <button
            className="yes-btn fade-in-out"
            onClick={handleYesButtonClick}
          >
            Yes, I Am
          </button>
          <button className="yes-btn fade-in-out" onClick={handleNoButtonClick}>
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default Heart;
