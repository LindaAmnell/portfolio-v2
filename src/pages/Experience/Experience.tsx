import { experienceList } from "../../data/experienceList";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="experience-title">Experience</h2>

      {experienceList.map((item) => (
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
