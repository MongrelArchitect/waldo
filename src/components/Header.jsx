import React from 'react';
import Nav from './Nav';
import Timer from './Timer';
import Characters from './Characters';

export default function Header({ characters, time }) {
  return (
    <header>
      <Nav />
      <Timer time={time} />
      <Characters characters={characters} />
    </header>
  );
}
