// Projects.js
import React from 'react';
import './Projects.css';

import weatherAppImg from './react-weather-img.png';
import  poemGen from './poem-generator.png';
import worldClock from './world-clock.png';

export default function Projects() {
  const projects = [
    {
      name: 'React Weather App',
      link: 'https://johannahsweatherservice.netlify.app/',
      image: weatherAppImg,
    },
    {
      name: 'Poem Generator',
      link: 'https://curious-biscuit-bcff04.netlify.app/',
      image: poemGen,
    },
    {
      name: 'World Clock',
      link: 'https://boisterous-crostata-fd10c4.netlify.app/',
      image: worldClock,
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-header">Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img
              src={project.image}
              alt={`${project.name}`}
              className="project-image"
            />
            <h3 className="project-name">{project.name}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
