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
          <FaGithub className="icon" />
          <FaLinkedin className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Home;
