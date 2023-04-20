import React, { useState } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';
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

  const [time, setTime] = useState('00:00:00');

  return (
    <div className="container">
      <Header
        characters={characters}
        setCharacters={setCharacters}
        time={time}
        setTime={setTime}
      />
      <Game characters={characters} />
      <Footer />
    </div>
  );
}
