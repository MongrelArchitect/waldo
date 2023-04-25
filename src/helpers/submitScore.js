export default function areAllFound(characters) {
  for (let i = 0; i < characters.length; i += 1) {
    if (!characters[i].found) {
      return false;
    }
  }
  return true;
}
