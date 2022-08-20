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
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Juan Cruz Carracedo</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/juancarracedodev" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/juancarracedo7" target="_blank" rel="noreferrer">
          <i class="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
