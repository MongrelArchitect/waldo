import React from 'react';
import Popup from './Popup';
import getCoords from '../helpers/Game';
import wimmel from '../images/wimmel.jpg';

export default function Game({ characters }) {
  return (
    <div data-testid="game" className="game">
      <Popup characters={characters} />
      {/* eslint-disable-next-line */}
      <img
        src={wimmel}
        alt="Wimmelbild"
        className="wimmel"
        onClick={getCoords}
      />
    </div>
  );
}
