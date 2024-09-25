import React, { useState, useEffect } from "react";
function HeaderSearch(props) {
  let [showState, setShowState] = useState(false);
  function changeShowState() {
    setShowState((showState) => !showState);
  }

  let [count, setCount] = useState(0);
  function upCounter() {
    setCount((count) => count + 1);
  }
  useEffect(() => {
    return () => {
      console.log(
        "Компонент був створений, компонент був прихований або видалений"
      );
    };
  });
  
  return (
    <>
     


      <input className="header-container__right__input" type="text" />

      
      
    </>
  );
}

export default HeaderSearch;
