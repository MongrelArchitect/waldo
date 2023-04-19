import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Popup from './Popup';

describe('Popup component', () => {
  const chars = [
    { name: 'char one', img: '#', found: false },
    { name: 'char two', img: '##', found: false },
    { name: 'char three', img: '###', found: true },
  ];

  const coords = { x: 5, y: 10 };

  it('exists', () => {
    render(<Popup characters={chars} coords={coords} />);
    expect(screen.getByTestId('popup')).toBeTruthy();
  });

  it('displays characters based on "found" status', () => {
    render(<Popup characters={chars} coords={coords} />);
    expect(screen.getAllByText(/[a-z]/i).length).toBe(2);
  });

  it('is hidden when "visible" prop is false', () => {
    render(<Popup characters={chars} coords={coords} visible={false} />);
    expect(screen.getByTestId('popup')).toHaveClass('popup hidden');
  });

  it('is shown when "visible" prop is true', () => {
    // eslint-disable-next-line
    render(<Popup characters={chars} coords={coords} visible={true} />);
    expect(screen.getByTestId('popup')).toHaveClass('popup visible');
  });
});
