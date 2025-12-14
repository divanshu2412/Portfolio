import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-name"><span>&lt;Divanshu/&gt;</span></h3>

        <p className="footer-text">
          Building modern web applications with passion and precision.
        </p>

        <div className="footer-links">
          <a href="https://github.com/divanshu2412" target="_blank" rel="noreferrer" aria-label="Divanshu GitHub Profile">
            GitHub
          </a>
          <a href="https://linkedin.com/in/divanshu24" target="_blank" rel="noreferrer" aria-label="Divanshu LinkedIn Profile">
            LinkedIn
          </a>
          <a href="mailto:divanshu4210@gmail.com" aria-label="Send Email to Divanshu">
            Email
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Divanshu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
