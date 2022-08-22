import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Juan Cruz Carracedo</h1>
        <p>Based in Italia</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
      </div>
      <div className="footer-sns">
        <div className="design-by">Designed By Juan Cruz Carracedo</div>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
