import React from 'react';
import { render, screen } from '@testing-library/react';
import Popup from './Popup';

describe('Popup component', () => {
  const chars = [
    { name: 'char one', img: '#', found: false },
    { name: 'char two', img: '##', found: false },
    { name: 'char three', img: '###', found: true },
  ];

  it('exists', () => {
    render(<Popup characters={chars} />);
    expect(screen.getByTestId('popup')).toBeTruthy();
  });

  it('displays characters based on "found" status', () => {
    render(<Popup characters={chars} />);
    expect(screen.getAllByText(/[a-z]/i).length).toBe(2);
  });
});
