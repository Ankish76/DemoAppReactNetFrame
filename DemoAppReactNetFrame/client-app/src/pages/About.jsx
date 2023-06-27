import { Link } from "react-router-dom";

const About = () => {
  return (
    <header className="App-header">
      About
      <Link to="/" className="App-link">
        Go To Home
      </Link>
    </header>
  );
};

export default About;
