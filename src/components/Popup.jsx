import React from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../helpers/firebase';

export default function Popup({
  characters,
  checkCoords,
  coords,
  foundCharacter,
  setFound,
  setMessageVisible,
  setPopupVisible,
  visible,
}) {
  // Place the popup window based on mouse cursor
  const style = {
    left: coords.x,
    top: coords.y,
  };

  const handleClick = async (event) => {
    // Query database to see if we've found the character
    const { character } = event.target.dataset;
    const querySnapshot = await getDocs(collection(db, 'characters'));
    querySnapshot.forEach((doc) => {
      if (doc.id === character) {
        // Get the coordinate range of the character we've selected
        const { xMax } = doc.data();
        const { xMin } = doc.data();
        const { yMax } = doc.data();
        const { yMin } = doc.data();
        if (
          // Check if we've clicked the right place
          checkCoords.x >= xMin
          && checkCoords.x <= xMax
          && checkCoords.y >= yMin
          && checkCoords.y <= yMax
        ) {
          // Found 'em!
          foundCharacter(character);
        } else {
          setFound(false);
        }
      }
    });
    setMessageVisible(true);
    setTimeout(() => {
      setMessageVisible(false);
    }, 2000);
    setPopupVisible();
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
          // eslint-disable-next-line
          <span
            key={character.name}
            onClick={handleClick}
            data-character={character.name}
          >
            <img src={character.img} alt={character.name} />
            {character.name}
          </span>
        );
      })}
    </div>
  );
}
