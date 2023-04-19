import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './Game';

describe('Game component', () => {
  const chars = [
    { name: 'char one', img: '#', found: false },
    { name: 'char two', img: '##', found: false },
    { name: 'char three', img: '###', found: true },
  ];

  it('exists', () => {
    render(<Game characters={chars} />);
    expect(screen.getByTestId('game')).toBeTruthy();
  });

  it('displays "wimmel" image', () => {
    render(<Game characters={chars} />);
    expect(screen.getByAltText('Wimmelbild')).toBeTruthy();
  });
});
