import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  collection, doc, getDocs, setDoc,
} from 'firebase/firestore';
import formatTime from '../helpers/timer';
import areAllFound from '../helpers/submitScore';
import db from '../helpers/firebase';

async function determinePosition(playerTime) {
  const scores = [];
  const querySnapshot = await getDocs(collection(db, 'scores'));
  querySnapshot.forEach((docu) => {
    scores.push({ name: docu.id, time: docu.data().time });
  });
  scores.sort((a, b) => a.time - b.time);
  for (let i = 0; i < scores.length; i += 1) {
    if (playerTime < scores[i].time) {
      return i + 1;
    }
  }
  return scores.length;
}

function determineSuffix(i) {
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) {
    return 'st';
  }
  if (j === 2 && k !== 12) {
    return 'nd';
  }
  if (j === 3 && k !== 13) {
    return 'rd';
  }
  return 'th';
}

export default function SubmitScore({ time, characters }) {
  const navigate = useNavigate();

  const [playerName, setPlayerName] = useState('');
  const [position, setPosition] = useState(1);

  const changeName = (event) => {
    setPlayerName(event.target.value);
  };

  const submitScore = async () => {
    await setDoc(doc(db, 'scores', playerName), {
      time,
    });
    navigate('/scores');
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
      <button type="button" onClick={submitScore}>
        SUBMIT
      </button>
    </form>
  );
}
