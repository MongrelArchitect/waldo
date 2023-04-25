import areAllFound from './submitScore';

describe('submit score helper', () => {
  it('reports false when at least one character is not found', () => {
    const chars = [
      { name: 'char one', img: '#', found: false },
      { name: 'char two', img: '##', found: true },
    ];
    expect(areAllFound(chars)).toBe(false);
  });

  it('reports true when all characters are found', () => {
    const chars = [
      { name: 'char one', img: '#', found: true },
      { name: 'char two', img: '##', found: true },
    ];
    expect(areAllFound(chars)).toBe(true);
  });
});
