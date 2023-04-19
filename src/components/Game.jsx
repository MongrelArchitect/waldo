import React from 'react';
import getCoords from '../helpers/Game';
import wimmel from '../images/wimmel.jpg';

export default function Game() {
  return (
    <div data-testid="game" className="game">
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
