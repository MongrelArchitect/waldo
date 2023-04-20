import React, { useState } from 'react';
import Popup from './Popup';
// eslint-disable-next-line
import getCoords, { keepInBounds } from '../helpers/Game';
import wimmel from '../images/wimmel.jpg';

export default function Game({ characters }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupCoords, setPopupCoords] = useState({ x: 0, y: 0 });

  const handleClick = (event) => {
    setPopupVisible(!popupVisible);
    setPopupCoords({
      x: keepInBounds(event).x,
      y: keepInBounds(event).y,
    });
    keepInBounds(event);
  };

  return (
    <div data-testid="game" className="game">
      <Popup
        characters={characters}
        visible={popupVisible}
        coords={popupCoords}
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
