import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div className="social-icons">
        <a
          href="https://github.com/Joey199-sudo"
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon"
          aria-label="GitHub Profile"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
}

//Footer;
