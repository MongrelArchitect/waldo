import React from 'react';
import formatTime from '../helpers/timer';
import areAllFound from '../helpers/submitScore';

export default function SubmitScore({ time, position, characters }) {
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
        {` ${position} `}
        place!
      </span>
      <label htmlFor="name">
        Enter your name:
        <input type="text" name="name" />
      </label>
      <button type="button">SUBMIT</button>
    </form>
  );
}
