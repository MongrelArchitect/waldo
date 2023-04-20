import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer component', () => {
  it('exists', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeTruthy();
  });

  it('contains link to my website', () => {
    render(<Footer />);
    expect(screen.getByText('Sean Eric Thomas')).toHaveAttribute(
      'href',
      'http://www.seanericthomas.com',
    );
  });

  it('contains link to source for image', () => {
    render(<Footer />);
    expect(screen.getByText('"Wimmelbild" art by Caro Wedekind'))
      .toHaveAttribute(
        'href',
        'https://commons.wikimedia.org/wiki/File:31c3-Wimmelbild.jpg',
      );
  });

  it('contains link to license for image', () => {
    render(<Footer />);
    expect(screen.getByText('CC BY 3.0'))
      .toHaveAttribute(
        'href',
        'https://creativecommons.org/licenses/by/3.0/deed.en',
      );
  });
});
