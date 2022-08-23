import React from "react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  
  const [t,i18n] = useTranslation("global")
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
        Juan Cruz Carracedo
      </div>
      <div className="Container-lang-Button">
      <button className="lang-button" onClick={() => i18n.changeLanguage("es")}>ES</button>
      <button className="lang-button" onClick={() => i18n.changeLanguage("en")}>EN</button>
      </div>
    </nav>
  );
};

export default Navbar;
