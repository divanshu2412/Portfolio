import React from "react";
import "./Education.css";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Guru Gobind Singh Indraprastha University",
    duration: "2021 – 2025",
    description:
      "Focused on software development, data structures, algorithms, and web technologies."
  },
  {
    degree: "Higher Secondary Education",
    institution:
      "Mahashay Chuni Lal Saraswati Bal Mandir Senior Secondary School",
    duration: "2020 – 2021",
    description:
      "Specialized in Mathematics and Science with a strong academic foundation."
  },
  {
    degree: "Secondary Education",
    institution: "Saraswati Bal Mandir Senior Secondary School",
    duration: "2018 – 2019",
    description: "Built a solid foundation in core academic subjects."
  }
];

const Education = () => (
  <section className="education">
    <h2 className="education-title">Education</h2>

    <div className="education-list">
      {educationData.map(({ degree, institution, duration, description }, i) => (
        <div className="education-card" key={i}>
          <h3>{degree}</h3>
          <span className="institution">{institution}</span>
          <span className="duration">{duration}</span>
          <p>{description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
