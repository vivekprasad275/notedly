import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
import MyNotes from "./mynotes";
import Favorites from "./favorites";
import { Routes } from "react-router-dom";
const Pages = () => {
  return (
    <Router>
      <Routes>
        {/* <Route></Route> */}
        <Route exact path="/" element={<Home/>} />
        <Route path="/mynotes" element={<MyNotes/>} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </Router>
  );
};
export default Pages;