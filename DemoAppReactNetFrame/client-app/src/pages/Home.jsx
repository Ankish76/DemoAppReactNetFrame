import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/values")
      .then((res) => {
        if (res.ok) {
          res.json().then(setData).catch(console.error);
        } else {
          console.error(res.statusText);
        }
      })
      .catch(console.error);
  }, []);
  return (
    <header className="App-header">
      Home
      <Link to="/about" className="App-link">
        Go To About
      </Link>
      <br />
      <br />
      <br />
      {data.length ? (
        <>
          Data
          {data.map((m) => (
            <p>
              {m}
              <br />
            </p>
          ))}
        </>
      ) : null}
    </header>
  );
};

export default Home;
