import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";
import { useTranslation } from "react-i18next";

const Cover = () => {

  const [t, i18n] = useTranslation("global")
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Juan Cruz Carracedo</h1>
      <p>{t("developer.mydeveloper")}</p>
    </div>
  );
};

export default Cover;
