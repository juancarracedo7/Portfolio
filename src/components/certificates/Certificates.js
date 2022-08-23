import React from "react";
import certificadoHenry from "../../assets/certificadoHenry.png";
import './certificate.css'
import utn from '../../assets/UTN3.png'
import { useTranslation } from "react-i18next";

export default function Certificate() {
    const [t, i18n] = useTranslation("global")
  return (
    <div className="container">
    <h1 className="h1">{t("certificates.mycertificate")}</h1>
      <img className="img" src={certificadoHenry} alt="nop" />
      <img className="img" src={utn} alt="nop" />
    </div>
  );
}
