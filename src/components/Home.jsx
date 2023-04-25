import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Characters from './Characters';

export default function Home({
  characters, resetCharacters, setTime, timer,
}) {
  useEffect(() => {
    setTime(0);
    clearInterval(timer);
    resetCharacters();
  }, []);

  return (
    <div className="home">
      <h1>Find &apos;Em</h1>
      <div className="instructions">
        <h2>How to play:</h2>
        <span>
          Your goal is to find several characters hidden within a chaotic scene,
          just like the classic puzzle book series
          {' '}
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/Where%27s_Wally%3F"
            rel="noreferrer"
          >
            &quot;Where&apos;s Waldo.&quot;
          </a>
          {' '}
          Click on the image when you&apos;ve found one of the characters, and
          select them from the dropdown to confirm. Try to get the best time
          possible, and compare your score to others on the scoreboard. Will you
          be the fastest? Let&apos;s go!
        </span>
      </div>
      <Characters characters={characters} />
      <div className="char-names">
        {characters.map((character) => (
          <span key={character.name}>{character.name}</span>
        ))}
      </div>
      <NavLink to="/play" className="play-link">
        START
      </NavLink>
    </div>
  );
}
