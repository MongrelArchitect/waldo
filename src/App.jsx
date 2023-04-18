import React, { useState } from 'react';
import Header from './components/Header';
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

  return (
    <div>
      <Header characters={characters} setCharacters={setCharacters} />
    </div>
  );
}
