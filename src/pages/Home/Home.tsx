import "./Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section className="start">
      <div className="start-content">
        <h1 className="start-greeting">Hi!</h1>
        <h2 className="start-name">I’m Linda</h2>
        <h3 className="start-role">Frontend developer</h3>

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
        </div>
      </div>
    </section>
  );
};

export default Home;
