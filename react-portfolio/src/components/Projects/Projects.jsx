import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React, featuring animations and modern UI.",
    tech: ["React", "CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "Calculator App",
    description:
      "A simple calculator application that performs basic arithmetic operations with a clean and responsive UI built using React.",
    tech: ["React", "JavaScript"],
    link: "#",
    github: "#",
  },
  {
    title: "Game App",
    description:
      "An interactive game application featuring engaging gameplay, real-time score tracking, and responsive design built with React.",
    tech: ["React", "JavaScript"],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-front">
              <h2>{project.title}</h2>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <p className="hover-text">Show more</p>
            </div>

            <div className="card-back">
              <p>{project.description}</p>

              <div className="project-links">
                <a href={project.link} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
