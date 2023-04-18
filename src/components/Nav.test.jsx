import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav component', () => {
  it('exists', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );
    expect(screen.getByRole('navigation')).toBeTruthy();
  });

  it('contains correct number of links', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );
    expect(screen.getAllByRole('link').length).toBe(3);
  });

  it('links to correct paths', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/',
    );
  });
});
