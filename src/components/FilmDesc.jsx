import React from "react";
import PropTypes from 'prop-types' 
import "./FilmDesc.scss"


FilmDesc.propTypes = {
  title:PropTypes.string,
  desc:PropTypes.string
}

function FilmDesc(props) {
  return (
    <div className="FilmDesc">
      <h1 className="FilmDesc__title">{props.title}</h1>
      <div className="FilmDesc__shortInfo">
        <div className="FilmDesc__shortInfo__data">2019 |</div>
        <div className="FilmDesc__shortInfo__director">
          Director: <span>Shawn Levy</span>
        </div>
        <div className="FilmDesc__shortInfo__seasons">| seasons: <span>3(5 Episodes)</span></div>
      </div>
      <div className="FilmDesc__desc">{props.desc}</div>
    </div>
  );
};

export default FilmDesc;
