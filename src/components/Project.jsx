import React from "react";
import "../style/Project.css";

import p1 from "../assets/project.jpg";
import p2 from "../assets/project.jpg";
import p3 from "../assets/project.jpg";
import p4 from "../assets/project.jpg";

const projects = [
  {
    title: "MERN To-Do App",
    desc: "Full-stack app with JWT & MongoDB",
    image: p1,
    link: "#",
    big: true,
  },
  {
    title: "Fitness Dashboard",
    desc: "Admin dashboard for fitness services",
    image: p2,
    link: "#",
  },
  {
    title: "Book Store App",
    desc: "React cart & admin panel",
    image: p3,
    link: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio UI/UX",
    image: p4,
    link: "#",
  },
];

const Project = () => {
  return (
    <section className="projects-section" id="project">
      <h2 className="section-title">
        Featured <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            className={`grid-card ${p.big ? "grid-big" : ""}`}
            key={i}
          >
            <img src={p.image} alt={p.title} />

            <div className="grid-overlay">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link}>View Project 🚀</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
