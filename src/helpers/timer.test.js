import formatTime from './timer';

describe('timer helper', () => {
  it('converts raw milliseconds to readable format', () => {
    expect(formatTime(64227)).toBe('01:04:23');
    expect(formatTime(74501)).toBe('01:14:50');
  });

  it('handles zero milliseconds', () => {
    expect(formatTime(0)).toBe('00:00:00');
  });

  it('handles small millisecond values (less than 1 second)', () => {
    expect(formatTime(1)).toBe('00:00:00');
    expect(formatTime(50)).toBe('00:00:05');
    expect(formatTime(229)).toBe('00:00:23');
    expect(formatTime(350)).toBe('00:00:35');
  });

  it('handles large millisecond values (over 1 hour)', () => {
    expect(formatTime(5400000)).toBe('90:00:00');
    expect(formatTime(5474501)).toBe('91:14:50');
    expect(formatTime(10800000)).toBe('180:00:00');
  });
});
