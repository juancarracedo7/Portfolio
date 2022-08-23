import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";


const Footer = () => {

  const [t, i18n] = useTranslation("global")
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Juan Cruz Carracedo</h1>
        <p>{t("base.mybase")}</p>
      </div>
      <div className="footer-contact">
        <h3>{t("contact.mycontact")}</h3>
      </div>
      <div className="footer-sns">
        <div className="design-by">{t("design.mydesign")}</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/juancarracedodev" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin fa-spin fa-1x linkedin"></i>
          </a>
          <a href="https://github.com/juancarracedo7" target="_blank" rel="noreferrer">
          <i class="fab fa-github fa-spin fa-1x github"></i>
          </a>
           <a href="mailto:juann.carracedo7@gmail.com" target="_blank" rel="noreferrer">
          <i class="fas fa-envelope fa-spin fa-1x mail"></i>
          </a>
          <a href="https://flipbookpdf.net/web/site/8fe530e4cb59657f397eeef8ae24acf134362a86202208.pdf.html" target="_blank" rel="noreferrer">
          <i class="fas fa-file-pdf fa-spin fa-1x curriculum"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
