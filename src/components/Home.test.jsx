import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  const chars = [
    { name: 'char one', img: '#', found: false },
    { name: 'char two', img: '##', found: false },
    { name: 'char three', img: '###', found: true },
  ];

  it('matches snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Home characters={chars} setTime={jest.fn()} setTimer={jest.fn()} />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
