import React from "react";
import "./About.css";
import juan from '../../assets/JuanCarracedo.jpeg'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
          {/* I'm a Full Stack Web Developer who likes to y tambien me gusta<br></br>
          porque es asi la vida y que se yo no se que mas poner loco */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,<br></br>
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum<br></br>
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium<br></br>
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis<br></br>
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam<br></br>

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
