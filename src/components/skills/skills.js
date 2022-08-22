import React from "react";
import "./skills.css";
import javacsript from "../../assets/Javascript.png";
import html from "../../assets/Html.png";
import css from "../../assets/Css.png";
import react from "../../assets/React.png";
import redux from "../../assets/Redux.png";
import node from "../../assets/Node.png";
import postgres from "../../assets/Postgres.png";
import sequelize from "../../assets/Sequelize.png";
import git from "../../assets/Git.png";
import trello from '../../assets/Trello.png'

const Skills = () => {
  return (
    <div className="info-container">
      <div className="info">
        <img src={html} alt="about" />
        <img src={css} alt="about" />
        <img src={javacsript} alt="about" />
        <img src={react} alt="about" />
        <img src={redux} alt="about" />
        <img src={node} alt="about" />
        <img src={postgres} alt="about" />
        <img src={sequelize} alt="about" />
        <img src={git} alt="about" />
        <img src={trello} alt="about" />
      </div>
    </div>
  );
};

export default Skills;
