import React from 'react';
import { render, screen } from '@testing-library/react';
import Timer from './Timer';

describe('Timer component', () => {
  const time = 64227;

  it('exists', () => {
    render(<Timer time={time} />);
    expect(screen.getByText(/\d/)).toBeTruthy();
  });

  it('displays time prop', () => {
    render(<Timer time={time} />);
    expect(screen.getByText(/\d/).textContent).toBe('01:04:23');
  });
});
