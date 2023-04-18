import React from 'react';
import wimmel from '../images/wimmel.jpg';

export default function Game() {
  return (
    <div data-testid="game" className="game">
      <img src={wimmel} alt="Wimmelbild" className="wimmel" />
    </div>
  );
}
