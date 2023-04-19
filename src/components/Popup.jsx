import React from 'react';

export default function Popup({ characters }) {
  return (
    <div data-testid="popup">
      {characters.map((character) => {
        if (character.found) {
          return null;
        }
        return (
          <span key={character.name}>
            <img src={character.img} alt={character.name} />
            {character.name}
          </span>
        );
      })}
    </div>
  );
}
