import React from "react";
import "./About.css";
import juan from "../../assets/JuanCarracedo.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <p>
          Hi😀 I'm a Full Stack Web Developer I am 28 years old and I am
          currently living in Italy. I am passionate about technology, very
          proactive and curious, always wanting to learn something new. 1 year
          ago I entered the world of programming, and I really realized what I
          want for my whole life. Work what I like, I go for my dream
        </p>
      </div>
      <div className="about-img">
        <img src={juan} alt="about" />
      </div>
    </div>
  );
};

export default About;
