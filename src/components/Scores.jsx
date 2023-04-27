import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../helpers/firebase';
import formatTime from '../helpers/timer';

export default function Scores({ timer }) {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    clearInterval(timer);
    const setFromDatabase = async () => {
      const newScores = [];
      const querySnapshot = await getDocs(collection(db, 'scores'));
      querySnapshot.forEach((doc) => {
        newScores.push({ name: doc.id, time: doc.data().time });
      });
      setScores(newScores.sort((a, b) => a.time - b.time));
    };
    setFromDatabase();
  }, []);

  return (
    <div className="scores">
      <h2>Scoreboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody aria-label="table body">
          {scores.map((score) => (
            <tr key={score.name}>
              <td>{scores.indexOf(score) + 1}</td>
              <td>{score.name}</td>
              <td>{formatTime(score.time)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
