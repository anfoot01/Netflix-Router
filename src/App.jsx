import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Genre from "./components/Genre";
import FilmDesc from "./components/FilmDesc";
import Rating from "./components/Rating";
import ButtonBlock from "./components/ButtonBlock";
import Popular from "./components/Popular";
import AgeMark from "./components/AgeMark";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
function App() {
  let filmTitle = "Stranger Things";
  let filmDesc =
    "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.";
  let countOfStars = "5";
  let genres = [
    {
      value: "Drama ",
    },
    {
      value: "Thriller ",
    },
    {
      value: "Supernatural",
    },
  ];

  return (
    <div className="container">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
      <div className="main-content">
        <Genre genreValue={genres}></Genre>
        <FilmDesc title={filmTitle} desc={filmDesc}></FilmDesc>
        <Rating rating={countOfStars}></Rating>
        <ButtonBlock></ButtonBlock>
        <Popular></Popular>
      </div>
      <AgeMark></AgeMark>
    </div>
  );
}

export default App;
