import React from 'react';

export default function Popup({
  characters, checkCoords, coords, visible,
}) {
  const style = {
    left: coords.x,
    top: coords.y,
  };

  return (
    <div
      className={visible ? 'popup visible' : 'popup hidden'}
      data-testid="popup"
      style={style}
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
