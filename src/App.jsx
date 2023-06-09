import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Game from './components/Game';
import Scores from './components/Scores';
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

  const [time, setTime] = useState(0);

  const [timer, setTimer] = useState(undefined);

  const [messageVisible, setMessageVisible] = useState(false);

  const [found, setFound] = useState(false);

  const foundCharacter = (characterName) => {
    const copy = getCopy(characters);
    copy.forEach((character) => {
      if (characterName === character.name) {
        // eslint-disable-next-line
        character.found = true;
      }
    });
    setFound(true);
    setCharacters(copy);
  };

  const resetCharacters = () => {
    const copy = getCopy(characters);
    copy.forEach((character) => {
      // eslint-disable-next-line
      character.found = false;
    });
    setCharacters(copy);
  };

  return (
    <div className="container">
      <Header
        characters={characters}
        found={found}
        messageVisible={messageVisible}
        setTime={setTime}
        time={time}
      />
      <Routes>
        <Route
          path="/"
          element={<Home characters={characters} timer={timer} />}
        />
        <Route
          path="/play"
          element={(
            <Game
              characters={characters}
              foundCharacter={foundCharacter}
              resetCharacters={resetCharacters}
              setFound={setFound}
              setMessageVisible={setMessageVisible}
              setTime={setTime}
              setTimer={setTimer}
              time={time}
              timer={timer}
            />
          )}
        />
        <Route path="/scores" element={<Scores timer={timer} />} />
      </Routes>
      <Footer />
    </div>
  );
}
