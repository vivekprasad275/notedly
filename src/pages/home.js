import React from "react";
// import the Link component from react-router
import { Link } from "react-router-dom";
import Header from "../components/Header";
const Home = () => {
  return (
    <div>
      <Header/>
      <h1>Notedly</h1>
      <p>This is the home page</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mynotes">My Notes</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
