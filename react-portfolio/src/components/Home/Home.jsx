import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Hello, I'm <span>Divanshu</span></h1>
        <h2>Frontend Developer</h2>
        <p>
          I build clean, modern, and responsive websites with a great user experience.
        </p>

        <a href="/contact" className="contact-btn">Contact Me</a>
      </div>
    </div>
  );
};

export default Home;
