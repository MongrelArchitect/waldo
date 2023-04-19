import React, { useState } from 'react';
import Popup from './Popup';
import getCoords from '../helpers/Game';
import wimmel from '../images/wimmel.jpg';

export default function Game({ characters }) {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleClick = (event) => {
    setPopupVisible(!popupVisible);
    console.log(getCoords(event));
  };

  return (
    <div data-testid="game" className="game">
      <Popup characters={characters} visible={popupVisible} />
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
