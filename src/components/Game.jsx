import React, { useState } from 'react';
import Popup from './Popup';
import getCoords from '../helpers/Game';
import wimmel from '../images/wimmel.jpg';

export default function Game({ characters }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupCoords, setPopupCoords] = useState({ x: 0, y: 0 });

  const handleClick = (event) => {
    setPopupVisible(!popupVisible);
    setPopupCoords({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    });
    console.log(getCoords(event));
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
