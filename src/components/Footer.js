import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="matrix-footer">
      <div className="footer-content">
        <span className="footer-text">[SYSTEM_ONLINE]</span>

        <div className="footer-links">
          <a
            href="https://github.com/rcicekli"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <FaGithub /> GITHUB
          </a>

          <a
            href="https://www.linkedin.com/in/rcicekli/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <FaLinkedin /> LINKEDIN
          </a>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} MATRIX_PORTAL
        </span>
      </div>
    </footer>
  );
}