import React from "react";
import './styles.css';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="container">
      <h1 className="header">Hi, I'm [AKSHAY KUMAR]</h1>
      <p className="sub-header">Backend Developer | CodeIgniter | Laravel | Express.js</p>

      <div className="projects">
        <ProjectCard
          title="Mentorship Platform"
          description="A mentorship platform with automated income distribution."
          link="#"
        />
        <ProjectCard
          title="E-commerce Backend"
          description="Built secure and scalable backend for an e-commerce app."
          link="#"
        />
        <ProjectCard
          title="Authentication System"
          description="Implemented JWT and OAuth authentication for secure login."
          link="#"
        />
      </div>

      <div className="social-links">
        <a href="#" className="social-icon"><FaGithub /></a>
        <a href="#" className="social-icon"><FaLinkedin /></a>
        <a href="mailto:#" className="social-icon"><FaEnvelope /></a>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <a href={link} className="project-link">View Project</a>
    </div>
  );
};

export default Portfolio;
