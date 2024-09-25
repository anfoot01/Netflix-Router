import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HeaderLog from "./HeaderLog";
import HeaderSearch from "./HeaderSearch";


import searchIcon from "../../src/assets/search-icon.png";
import logo from "../assets/netflix-logo.png";
import "./Header.scss";

const Header = () => {
  // const today = new Date();
  // const month = today.getMonth();
  // const year = today.getFullYear();
  // const date = today.getDate();
  // if (date == 1 && date == 21 && date == 31){
  //   const currentDate = month + "/" + date + "st";
  // }
  // if (date == 2){
  //   const currentDate = month + "/" + date + "nd";
  // }
  // if (date == 3){
  //   const currentDate = month + "/" + date + "rd";
  // }
  // else{
  //   const currentDate = month + "/" + date + "th";
  // }
  const currentDate = "Friday 8th July";
  let [showCounter, setShowCounter] = useState(true);



  return (
    
    <header className="header-container">
      <div className="header-container__left">
        <img className="header-container__left__logo" src={logo} alt="logo" />
        <div className="header-container__left__date">| {currentDate}</div>
      </div>
      <div className="header-container__right">
        
      {showCounter && <HeaderSearch></HeaderSearch>}
      <button className="searchBtn" onClick={() => setShowCounter(!showCounter)}>
      <img
            className="header-container__right__search"
            src={searchIcon}
            alt="search"
          ></img>
        </button>
       
        <HeaderLog></HeaderLog>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </header>

    
   
  );
};

export default Header;
