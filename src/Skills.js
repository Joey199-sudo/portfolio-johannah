// Skills.js
import React from 'react';
import './Skills.css'; // Link the external CSS file

export default function Skills(){
  const skills = [
    { name: 'React.js', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'HTML5 & CSS3', level: 'Advanced' },
    { name: 'Bootstrap', level: 'Advanced' },
    { name: 'Responsive Design', level: 'Advanced' },
    { name: 'Git & GitHub', level: 'Intermediate' },
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-header">Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Skills;
