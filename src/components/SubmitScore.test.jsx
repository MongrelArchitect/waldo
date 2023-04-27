import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubmitScore from './SubmitScore';

describe('SubmitScore component', () => {
  it('exists', () => {
    render(
      <BrowserRouter>
        <SubmitScore time={64227} characters={[]} />
      </BrowserRouter>,
    );
    expect(screen.getByRole('form')).toBeTruthy();
  });

  it("displays user's final time score", () => {
    render(
      <BrowserRouter>
        <SubmitScore time={64227} characters={[]} />
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
      'FINAL SCORE',
    );
    expect(screen.getByText(/\d:/).textContent).toBe('01:04.23');
  });

  it("displays user's position on scoreboard", () => {
    render(
      <BrowserRouter>
        <SubmitScore time={64227} characters={[]} />
      </BrowserRouter>,
    );
    expect(screen.getByText(/You scored/).textContent).toBe(
      'You scored 1st place!',
    );
  });

  it('prompts user for their name', () => {
    render(
      <BrowserRouter>
        <SubmitScore time={64227} characters={[]} />
      </BrowserRouter>,
    );
    expect(screen.getByRole('textbox')).toBeTruthy();
  });

  it('prompts user for their name', () => {
    render(
      <BrowserRouter>
        <SubmitScore time={64227} characters={[]} />
      </BrowserRouter>,
    );
    expect(screen.getByRole('textbox')).toBeTruthy();
  });

  it('is hidden when at least one character not yet found', () => {
    const chars = [
      { name: 'char one', img: '#', found: false },
      { name: 'char two', img: '##', found: true },
    ];
    render(
      <BrowserRouter>
        <SubmitScore time={64227} characters={chars} />
      </BrowserRouter>,
    );
    expect(screen.getByRole('form')).toHaveClass('submit-score hidden');
  });

  it('is visible when all characters found', () => {
    const chars = [
      { name: 'char one', img: '#', found: true },
      { name: 'char two', img: '##', found: true },
    ];
    render(
      <BrowserRouter>
        <SubmitScore time={64227} characters={chars} />
      </BrowserRouter>,
    );
    expect(screen.getByRole('form')).toHaveClass('submit-score visible');
  });
});
