import React from 'react';
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaJava,
  FaAndroid
} from 'react-icons/fa';
import { SiNextdotjs } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaAndroid />, name: 'ANDROID', level: 'ADVANCED' },
    { icon: <FaJs />, name: 'JAVASCRIPT', level: 'EXPERT' },
    { icon: <FaReact />, name: 'REACT', level: 'EXPERT' },
    { icon: <FaNodeJs />, name: 'NODE.JS', level: 'ADVANCED' },
    { icon: <SiNextdotjs />, name: 'NEXT.JS', level: 'ADVANCED' },
    { icon: <FaGitAlt />, name: 'GIT', level: 'EXPERT' },
    { icon: <FaJava />, name: 'JAVA', level: 'ADVANCED' },
    { icon: <FaAws />, name: 'AWS', level: 'INTERMEDIATE' }
  ];

  return (
    <section className="matrix-section">
      <h2 className="section-title">[SKILLS_MATRIX]</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">[{skill.level}]</div>
          </div>
        ))}
      </div>
    </section>
  );
}
