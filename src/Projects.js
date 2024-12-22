import React from "react";

export default function Projects() {
  const projects = [
  //  { name: "Portfolio Website", link: "https://yourportfolio.com" },
    //{ name: "E-commerce App", link: "https://yourecommerce.com" },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Projects;
