import { aboutText } from "../../data/aboutText";
import { skills } from "../../data/skills";
import "./About.css";
import { sectionTitles } from "../../data/sectionTitles";
import type { Language } from "../../types/language";

type Props = {
  language: Language;
};

const About = ({ language }: Props) => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">{sectionTitles[language].about}</h2>

      <div className="about-text">
        {aboutText[language].map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>

      <div className="about-skills">
        <h3>{sectionTitles[language].technicalKnowledge}</h3>{" "}
        <div className="skills-list">
          {skills.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
