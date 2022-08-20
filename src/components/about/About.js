import React from "react";
import "./About.css";
import juan from '../../assets/JuanCarracedo.jpeg'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
          I'm a Full Stack Web Developer 
        </p>
      </div>
      <div className="about-img">
        <img
          src={juan}
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
