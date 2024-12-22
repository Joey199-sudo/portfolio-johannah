import React from 'react';
import './About.css'; // Link the external CSS file
import myImg from "./image2.jpg";

export default function  About(){
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={myImg} alt="Joey"  />
        </div>
        <div className="about-details">
          <p>
            Hello! I'm Johannah "Joey" Makgato, a passionate Junior Front-end Developer specializing in creating responsive and dynamic web applications.
          </p>
          <p>
            I love working with technologies like React.js, Bootstrap, and CSS to bring ideas to life. When I'm not coding, you can find me exploring nature, or learning new skills.
          </p>
          
        </div>
      </div>
    </div>
  );
};

//About;

