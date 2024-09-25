import React from "react";
import PropTypes from 'prop-types';
import "./Rating.scss"
function Rating ()  {
  let ratings = [true, true, true, true, true];
  return (
  <div className="rating">
      {ratings.map((isFilled, index) => (
        <span className="material-symbols-outlined rating__star yellow"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L11.45 11.22L1.28003 12.69L8.64003 19.87L6.90003 30L16 25.22L25.1 30L23.36 19.87L30.72 12.7L20.55 11.22L16 2Z" fill="#FFEA2B" />
        </svg>
      </span>
      ))}
    </div>
  );
};

export default Rating;
