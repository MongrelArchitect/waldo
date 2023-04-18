import React from 'react';
import { render, screen } from '@testing-library/react';
import Timer from './Timer';

describe('Timer component', () => {
  const time = '03:43:19';

  it('exists', () => {
    render(<Timer time={time} />);
    expect(screen.getByText(/\d*:\d*:\d*/)).toBeTruthy();
  });

  it('displays time prop', () => {
    render(<Timer time={time} />);
    expect(screen.getByText(/\d*:\d*:\d*/).textContent).toBe('03:43:19');
  });
});
