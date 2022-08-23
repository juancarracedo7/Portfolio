import React from "react";
import "./Cover.css";
import Video from "../../media/Video.mp4";
import { useTranslation } from "react-i18next";

const Cover = () => {

  const [t, i18n] = useTranslation("global")
  return (
    <div className="cover-container">
      <video className="video" src={Video} autoPlay loop muted />
      <h1>Juan Cruz Carracedo</h1>
      <p>{t("developer.mydeveloper")}</p>
    </div>
  );
};

export default Cover;
