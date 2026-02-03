import { homeText } from "../../data/homeText";
import type { Language } from "../../types/language";
import "./Home.css";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
type Props = {
  language: Language;
};
const Home = ({ language }: Props) => {
  const text = homeText[language];
  return (
    <section className="start">
      <div className="start-content">
        <h1 className="start-greeting">{text.greeting}</h1>
        <h2 className="start-name">{text.name}</h2>
        <h3 className="start-role">{text.role}</h3>

        <div className="start-icons">
          <a
            href="https://github.com/LindaAmnell"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/linda-amnell-54a803297/"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="">
            <FaRegEnvelope className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
