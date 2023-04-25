import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import getCoords, { keepInBounds } from '../helpers/Game';
import wimmel from '../images/wimmel.jpg';

export default function Game({
  characters,
  foundCharacter,
  resetCharacters,
  setTime,
  setTimer,
  timer,
}) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupCoords, setPopupCoords] = useState({ x: 0, y: 0 });
  const [checkCoords, setCheckCoords] = useState({ x: 0, y: 0 });

  const handleClick = (event) => {
    // Show the popup and keep it in bounds
    setPopupVisible(!popupVisible);
    setPopupCoords({
      x: keepInBounds(event).x,
      y: keepInBounds(event).y,
    });
    keepInBounds(event);

    // Keep track of coordinates to check for character
    setCheckCoords({
      x: getCoords(event).x,
      y: getCoords(event).y,
    });
  };

  const handleImageLoad = () => {
    const startTime = Date.now();

    setTimer(
      setInterval(() => {
        const newTime = Date.now() - startTime;
        setTime(newTime);
      }, 10),
    );
  };

  useEffect(() => () => {
    clearInterval(timer);
    setTimer(undefined);
    setTime(0);
    resetCharacters();
  }, []);

  return (
    <div data-testid="game" className="game">
      <Popup
        characters={characters}
        checkCoords={checkCoords}
        coords={popupCoords}
        foundCharacter={foundCharacter}
        setPopupVisible={setPopupVisible}
        visible={popupVisible}
      />
      {/* eslint-disable-next-line */}
      <img
        src={wimmel}
        alt="Wimmelbild"
        className="wimmel"
        onClick={handleClick}
        onLoad={handleImageLoad}
      />
    </div>
  );
}
