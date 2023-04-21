export default function getCopy(characters) {
  const copy = [];

  characters.forEach((character) => {
    const charCopy = { ...character };
    copy.push(charCopy);
  });

  return copy;
}
