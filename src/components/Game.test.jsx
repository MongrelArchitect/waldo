import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Game from './Game';

describe('Game component', () => {
  const chars = [
    { name: 'char one', img: '#', found: false },
    { name: 'char two', img: '##', found: false },
    { name: 'char three', img: '###', found: true },
  ];

  const setTime = jest.fn();

  it('exists', () => {
    render(
      <BrowserRouter>
        <Game
          characters={chars}
          resetCharacters={jest.fn()}
          setTime={setTime}
          setTimer={jest.fn()}
          time={0}
        />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('game')).toBeTruthy();
  });

  it('displays "wimmel" image', () => {
    render(
      <BrowserRouter>
        <Game
          characters={chars}
          resetCharacters={jest.fn()}
          setTime={setTime}
          setTimer={jest.fn()}
          time={0}
        />
      </BrowserRouter>
    );
    expect(screen.getByAltText('Wimmelbild')).toBeTruthy();
  });
});
