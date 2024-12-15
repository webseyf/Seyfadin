import React from "react";
import "../styles/Project.css";

const Projects = () => {
  const projectData = [
    {
      title: "Crypto Website",
      description: "An interactive platform providing real-time cryptocurrency data, trends, and insights.",
      techStack: ["React", "CSS", "API"],
      image: "/crypto.jpg", // Add the image path
      github: "https://github.com/webseyf/Z_Crypto-Ethiopia",
      demo: "https://z-crypto.vercel.app",
    },
    {
      title: "Movie Discovery Web App",
      description: "A dynamic web application for discovering movies with detailed information fetched via APIs.",
      techStack: ["React", "API", "JavaScript"],
      image: "/scary.jpg",
      github: "https://github.com/webseyf/ScaryFlix",
      demo: "https://scaryflix1.vercel.app",
    },
    {
      title: "Landing Page",
      description: "A modern, responsive landing page developed to showcase the features and services of an organization.",
      techStack: ["Firebase", "React", "Tailwind CSS"],
      image: "/aastu.png",
      github: "https://github.com/webseyf/",
      demo: "https://aastu.software",
    },
  ];
  

  return (
    <section className="projects" id="projects">
      <h2 className="sec-title">Some of My Work!</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
