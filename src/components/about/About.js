import React from "react";
import "./About.css";
import juan from "../../assets/JuanCarracedo.jpeg";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <div className="about-container">
      <div className="about-desc">
        <p>
          {t("about.myself")}
        </p>
      </div>
      <div className="about-img">
        <img src={juan} alt="about" />
      </div>
    </div>
  );
};

export default About;
