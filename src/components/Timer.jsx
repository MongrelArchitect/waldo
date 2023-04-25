import React from 'react';
import formatTime from '../helpers/timer';

export default function Timer({ time }) {
  return (<span className="timer">{formatTime(time)}</span>);
}
