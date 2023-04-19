import React from 'react';

export default function Popup({ characters, visible }) {
  return (
    <div
      data-testid="popup"
      className={visible ? 'popup visible' : 'popup hidden'}
    >
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
