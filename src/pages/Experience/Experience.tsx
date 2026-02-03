import { experienceList } from "../../data/experienceList.ts";
import { sectionTitles } from "../../data/sectionTitles.ts";
import type { Language } from "../../types/language.ts";
import "./Experience.css";

type Props = {
  language: Language;
};
const Experience = ({ language }: Props) => {
  return (
    <section className="experience">
      <h2 className="section-title">{sectionTitles[language].experience}</h2>

      {experienceList[language].map((item) => (
        <div className="experience-card" key={item.company}>
          <h3 className="experience-heading">
            {item.title} – {item.company}
          </h3>

          <p className="date">{item.date}</p>

          {item.description.map((text) => (
            <p className="experience-text" key={text}>
              {text}
            </p>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Experience;
