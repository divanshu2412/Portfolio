import React from "react";
import "./Skills.css";

const Skills = () => {
  const frontendSkills = [
    "HTML 5",
    "CSS 3",
    "JavaScript",
    "Bootstrap 5",
    "React JS",
  ];

  const tools = [
    "Git & GitHub",
    "Visual Studio Code",
    "Chrome Dev. Tools",
    "Python",
    "C++",
  ];

  return (
    <div className="skills-container">
      <h1>My Skills</h1>

      <h2>Front - End Development</h2>
      <div className="skills-grid">
        {frontendSkills.map((skill, index) => (
          <div key={index} className="skill-card">{skill}</div>
        ))}
      </div>

      <h2>Tools & Technologies</h2>
      <div className="skills-grid">
        {tools.map((skill, index) => (
          <div key={index} className="skill-card">{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
