import React from "react";
import {
  FaCode,
  FaRobot,
  FaShieldAlt,
  FaCloud,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "R_SPORT_ECOMMERCE",
      description:
        " React ve Node.js kullanılarak geliştirilmiş, responsive ve kullanıcı dostu bir web uygulaması.",
      link: "https://github.com/rcicekli/R-Sport-Ecommerce-Frontend",
      demo: "https://r-sport-ecommerce-frontend.vercel.app/",
      icon: <FaCode />,
    },
    {
      title: "RESTAURANT_WEBSITE",
      description: "React ve Bootstrap kullanarak oluşturduğum kullanıcıya yönelik tasarlanmış restaurant websitesi.",
      link: "https://github.com/rcicekli/Restaurant-Website",
      demo: "https://restaurant-website-eta-six.vercel.app/",
      icon: <FaRobot />,
    },
    {
      title: "DAVINCI_AI_FRONT_END",
      description: "Next.js ve Tailwind kullanarak yaptığım Davinci AI - Yapay Zeka Sanat Platformunun Front-End Klonu",
      link: "https://github.com/rcicekli/Davinci-Ai-Front-End",
      demo: "https://davinci-ai-front-end.vercel.app/",
      icon: <FaShieldAlt />,
    },
    {
      title: "MATRIX_DEVELOPER_PORTFOLIO",
      description: "React ve Reactstrap kullanılarak yaptığım, Matrix temalı developer portfolyo sitesi",
      link: "https://github.com/rcicekli/Developer-Portfolio",
      demo: "https://developer-portfolio-mu-five.vercel.app/",
      icon: <FaCloud />,
    },
    {
      title: "TURKEY_WEATHER_APP",
      description: "React,Tailwind ve OpenWeather API kullanarak yaptığım hava durumu uygulaması",
      link: "https://github.com/rcicekli/OpenWeather-with-Turkey-Map",
      demo: "https://open-weather-with-turkey-map.vercel.app/",
      icon: <FaDatabase />,
    },
    {
      title: "THEMED_USER_POST_MANAGER",
      description: "React, TypeScript, Material UI (MUI) kullanılarak yaptığım bir Blog uygulaması",
      link: "https://github.com/rcicekli/users-posts-blog-app-react-ts",
      demo: "https://users-posts-blog-app-react-ts.vercel.app/",
      icon: <FaGithub />,
    },
  ];

  return (
    <section className="matrix-section">
      <h2 className="section-title">[PROJECTS_MATRIX]</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <div className="project-icon">{project.icon}</div>
              <div className="project-title">{project.title}</div>
              <div className="project-description">{project.description}</div>
              <div className="project-buttons">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  [ACCESS_CODE]
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-demo"
                >
                  [SIMULATION]
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
