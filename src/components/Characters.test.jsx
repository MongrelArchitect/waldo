import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Characters from './Characters';

describe('Characters component', () => {
  const chars = [
    { name: 'char one', img: '#', found: false },
    { name: 'char two', img: '##', found: false },
    { name: 'char three', img: '###', found: true },
  ];

  it('exists', () => {
    render(<Characters characters={chars} />);
    expect(screen.getByTestId('characters')).toBeTruthy();
  });

  it('displays correct number of character images', () => {
    render(<Characters characters={chars} />);
    expect(screen.getAllByRole('img').length).toBe(3);
  });

  it('applies correct class names based on "found" status', () => {
    render(<Characters characters={chars} />);
    expect(screen.getByAltText('char one')).toHaveClass('not-found');
    expect(screen.getByAltText('char two')).toHaveClass('not-found');
    expect(screen.getByAltText('char three')).toHaveClass('found');
  });
});
