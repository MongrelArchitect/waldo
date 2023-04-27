import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import formatTime from '../helpers/timer';
import areAllFound from '../helpers/submitScore';
import db from '../helpers/firebase';

async function determinePosition(playerTime) {
  const scores = [];
  const querySnapshot = await getDocs(collection(db, 'scores'));
  querySnapshot.forEach((doc) => {
    scores.push({ name: doc.id, time: doc.data().time });
  });
  scores.sort((a, b) => a.time - b.time);
  for (let i = 0; i < scores.length; i += 1) {
    if (playerTime < scores[i].time) {
      return i + 1;
    }
  }
  return scores.length;
}

function determineSuffix(position) {
  switch (position.toString().slice(-1)) {
    case '1':
      return 'st';
    case '2':
      return 'nd';
    case '3':
      return 'rd';
    default:
      return 'th';
  }
}

export default function SubmitScore({ time, characters }) {
  const [playerName, setPlayerName] = useState('');
  const [position, setPosition] = useState('loading...');

  const changeName = (event) => {
    setPlayerName(event.target.value);
  };

  useEffect(() => {
    const getPosition = async () => {
      setPosition(await determinePosition(time));
    };
    getPosition();
  }, [characters]);

  return (
    <form
      name="submitScore"
      className={
        areAllFound(characters) ? 'submit-score visible' : 'submit-score hidden'
      }
    >
      <h2>FINAL SCORE</h2>
      <span className="final-time">{formatTime(time)}</span>
      <span className="position">
        You scored
        {` ${position}${determineSuffix(position)} `}
        place!
      </span>
      <label htmlFor="name">
        Enter your name:
        <input
          type="text"
          name="name"
          onChange={changeName}
          value={playerName}
        />
      </label>
      <button type="button">SUBMIT</button>
    </form>
  );
}
