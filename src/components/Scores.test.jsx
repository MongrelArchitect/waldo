import React from 'react';
import { render, screen } from '@testing-library/react';
import Scores from './Scores';

describe('Scores component', () => {
  it('exists', () => {
    render(<Scores />);
    expect(screen.getByRole('table')).toBeTruthy();
  });

  it('displays correct number of headings', () => {
    render(<Scores />);
    expect(screen.getAllByRole('columnheader').length).toBe(3);
  });

  it('matches snapshot', () => {
    const { container } = render(<Scores />);
    expect(container).toMatchSnapshot();
  });
});
