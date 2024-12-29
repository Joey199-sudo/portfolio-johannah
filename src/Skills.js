// Skills.js
import React from 'react';
import './Skills.css';

export default function Skills() {
  const skills = [
    { name: 'React.js', level: 'Intermediate', progress: 70 },
    { name: 'JavaScript', level: 'Intermediate', progress: 75 },
    { name: 'HTML5 & CSS3', level: 'Advanced', progress: 90 },
    { name: 'Bootstrap', level: 'Advanced', progress: 85 },
    { name: 'Responsive Design', level: 'Advanced', progress: 95 },
    { name: 'Git & GitHub', level: 'Intermediate', progress: 80 },
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-header">Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <h3>{skill.name}</h3>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${skill.progress}%` }}
              ></div>
            </div>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
