import React from 'react';
import "./Popular.scss";
import breakingBad from "../assets/popular1.png";
import theRain from "../assets/popular2.png";
import lifeInAYear from "../assets/popular3.png";
import moneyHeist from "../assets/popular4.png";
import squidGame from "../assets/popular5.png";
const Popular = () => {
    return (
        <div className='popular'>
            <h1 className="popular__title">POPULAR THIS WEEK</h1>
            <div className="popular__films">
                <img src={breakingBad} alt="Breaking Bad" />
                <img src={theRain} alt="The Rain" />
                <img src={lifeInAYear} alt="Life in a Year" />
                <img src={moneyHeist} alt="Money Heist" />
                <img src={squidGame} alt="Squid Game" />
            </div>
        </div>
    );
};

export default Popular;