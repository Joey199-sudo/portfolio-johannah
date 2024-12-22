import React from "react";
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <h1>Johannah Makgato</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

//Header;
