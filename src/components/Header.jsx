import React from 'react';
import Nav from './Nav';
import Timer from './Timer';
import Characters from './Characters';

export default function Header({ characters }) {
  return (
    <header>
      <Nav />
      <Timer />
      <Characters characters={characters} />
    </header>
  );
}
