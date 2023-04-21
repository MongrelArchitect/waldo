import React, { useState } from 'react';
import Popup from './Popup';
import getCoords, { keepInBounds } from '../helpers/Game';
import wimmel from '../images/wimmel.jpg';

export default function Game({ characters, foundCharacter }) {
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
      />
    </div>
  );
}
