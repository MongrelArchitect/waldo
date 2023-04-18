import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './Game';

describe('Game component', () => {
  it('exists', () => {
    render(<Game />);
    expect(screen.getByTestId('game')).toBeTruthy();
  });

  it('displays "wimmel" image', () => {
    render(<Game />);
    expect(screen.getByRole('img')).toBeTruthy();
  });
});
