import React from 'react';

export default function Characters({ characters }) {
  return (
    <span data-testid="characters">
      {characters.map((character) => (
        <img
          src={character.img}
          alt={character.name}
          key={character.name}
          className={character.found ? 'found' : 'not-found'}
        />
      ))}
    </span>
  );
}
