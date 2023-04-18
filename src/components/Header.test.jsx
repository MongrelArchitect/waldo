import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  const chars = [
    { name: 'char one', img: '#', found: false },
    { name: 'char two', img: '##', found: false },
    { name: 'char three', img: '###', found: true },
  ];

  it('exists', () => {
    render(
      <BrowserRouter>
        <Header characters={chars} />
      </BrowserRouter>,
    );
    expect(screen.getByRole('banner')).toBeTruthy();
  });

  it('matches snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Header characters={chars} />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
