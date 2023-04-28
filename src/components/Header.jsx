import React from 'react';
import Nav from './Nav';
import Message from './Message';
import Timer from './Timer';
import Characters from './Characters';

export default function Header({
  characters, found, messageVisible, time,
}) {
  return (
    <header>
      <Nav />
      <Message found={found} visible={messageVisible} />
      <Timer time={time} />
      <Characters characters={characters} />
    </header>
  );
}
