import React from "react";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap"];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

// Skills;
