import React from "react";
import "./Home.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import { TypeAnimation } from 'react-type-animation';

const socialLinks = [
  { icon: <LinkedInIcon />, label: "LinkedIn", url: "https://linkedin.com/in/divanshu24" },
  { icon: <GitHubIcon />, label: "GitHub", url: "https://github.com/divanshu2412" },
  { icon: <EmailIcon />, label: "Email", url: "mailto:divanshu4210@gmail.com" },
  { icon: <RecentActorsIcon />, label: "Resume", url: "" },
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>
          Hello, I'm{" "}
          <TypeAnimation
            sequence={[
              'Divanshu',  // type 'Divanshu'
              2000,        // wait 2 seconds
              '',          // delete text
              1000,        // wait 1 second
              'Divanshu',  // type again
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ color: '#2563eb', fontWeight: '700' }}
          />
        </h1>
        <h2>Frontend Developer</h2>
        <p>
          I build clean, modern, and responsive websites with a great user experience.
        </p>
        <a href="/contact" className="contact-btn">
          Contact Me
        </a>
      </div>

      <div className="social-links">
        {socialLinks.map(({ icon, label, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={label}
          >
            <span className="social-label">{label}</span>
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
