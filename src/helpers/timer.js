function stringify(number) {
  return number.toString().padStart(2, '0');
}

export default function formatTime(raw) {
  const milliseconds = Math.floor(raw % 1000);
  const seconds = Math.floor((raw / 1000) % 60);
  const minutes = Math.floor((raw / 1000 / 60) % 60);
  const hours = Math.floor((raw / 1000 / 60 / 60) % 60);
  return `${
    hours > 0 ? stringify(hours * 60 + minutes) : stringify(minutes)
  }:${stringify(seconds)}:${stringify(Math.round(milliseconds / 10))}`;
}
