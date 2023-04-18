import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/play">Play</NavLink>
      <NavLink to="/scores">Scoreboard</NavLink>
    </nav>
  );
}
