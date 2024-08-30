import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="orbital" className="orbital" />
      <div className="left">
        <h1>Book OF Vashanti</h1>
        <h2>SuperCharge Your knowledge of everything</h2>
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolore
          cumque maiores distinctio sit sed dolor est doloribus eos impedit.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/vish.png" alt="bot" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "/bot.png"
              }
              alt="user"
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human: what is life ",
                1000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: breathing,moving,seeing,feeling is life",
                1000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2: why do we live",
                1000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: we live for some purpose in life for yourself and for loved once",
                1000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="logo" />
        <div className="links">
          <Link to="/">Terms of service</Link>
          <Link to="/">Privacy policy</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
