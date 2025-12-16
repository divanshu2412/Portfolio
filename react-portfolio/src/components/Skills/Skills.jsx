import React from "react";
import "./Skills.css";

const frontendSkills = [
  { name: "HTML 5", icon: "/icons/html.svg" },
  { name: "CSS 3", icon: "/icons/css.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "Bootstrap 5", icon: "/icons/bootstrap.svg" },
  { name: "React JS", icon: "/icons/react.svg" },
  { name: "Redux", icon: "/icons/redux.svg" },
];

const tools = [
  { name: "Git", icon: "/icons/git.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "VS Code", icon: "/icons/vscode.svg" },
  { name: "NPM", icon: "/icons/npm.svg" },
  { name: "Vite JS", icon: "/icons/vite.svg" },
  { name: "Chrome Dev Tools", icon: "/icons/chrome.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "C++", icon: "/icons/cpp.svg" },
];

const SkillCard = ({ name, icon }) => (
  <div className="skill-card">
    <img src={icon} alt={name} className="skill-icon" />
    <div className="skill-name">{name}</div>
  </div>
);

const Skills = () => (
  <div className="skills-container">
    <h1>My Skills</h1>

    <h2>Front-End Development</h2>
    <div className="skills-grid">
      {frontendSkills.map(skill => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </div>

    <h2>Tools & Technologies</h2>
    <div className="skills-grid">
      {tools.map(tool => (
        <SkillCard key={tool.name} {...tool} />
      ))}
    </div>
  </div>
);

export default Skills;
