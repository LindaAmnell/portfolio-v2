import { skills } from "../../data/skills";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About</h2>

      <div className="about-text">
        <p>
          Hi! I’m Linda, a frontend developer with a degree in frontend
          development and a strong focus on creating clean, user-friendly
          interfaces.
        </p>

        <p>
          I work mainly with React, TypeScript, HTML, and CSS, and I enjoy
          turning ideas into well-structured and intuitive solutions.
        </p>
        <p>
          Right now, I’m expanding my skill set by studying .NET Cloud, with a
          growing interest in how frontend and backend work together in scalable
          applications.
        </p>
        <p>
          Outside of coding, I enjoy staying active and solving puzzles—things
          that keep me curious and focused.
        </p>
      </div>

      <div className="about-skills">
        <h3>Technical knowledge</h3>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
