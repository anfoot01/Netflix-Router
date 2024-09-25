import React from "react";
import PropTypes from 'prop-types';
import "./Genre.scss"

Genre.propTypes = {
  genreValue:PropTypes.arrayOf(
    PropTypes.shape({
      value:PropTypes.string
    })
  )
};
Genre.defaultProps ={
  genreValue: false
} 

function Genre(props) {
  let genres = [
    {
      value: 'Drama │',
    },
    {
      value: 'Thriller │',
    },
    {
      value: 'Supernatural'
    }
  ];
  
let genreEl = genres.map((item, index) => {
  return (
    <p key={index} href="genre"> {item.value}</p>
  )
})
return (
  <div className="genres">
    {genreEl}
  </div>
);
};

export default Genre;
