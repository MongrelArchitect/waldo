import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Game from './components/Game';
import Footer from './components/Footer';
import getCopy from './helpers/app';
import beastie from './images/beastie.jpg';
import creeper from './images/creeper.jpg';
import superStar from './images/super-star.jpg';

export default function App() {
  const [characters, setCharacters] = useState([
    {
      name: 'beastie',
      img: beastie,
      found: false,
    },
    {
      name: 'creeper',
      img: creeper,
      found: false,
    },
    {
      name: 'super star',
      img: superStar,
      found: false,
    },
  ]);

  const foundCharacter = (characterName) => {
    const copy = getCopy(characters);
    copy.forEach((character) => {
      if (characterName === character.name) {
        // eslint-disable-next-line
        character.found = true;
      }
    });
    setCharacters(copy);
  };

  const [time, setTime] = useState(0);

  return (
    <div className="container">
      <Header characters={characters} time={time} setTime={setTime} />
      <Routes>
        <Route path="/" element={<Home characters={characters} />} />
        <Route
          path="/play"
          element={(
            <Game
              characters={characters}
              foundCharacter={foundCharacter}
              setTime={setTime}
            />
          )}
        />
      </Routes>
      <Footer />
    </div>
  );
}
