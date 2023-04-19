export default function getCoords(event) {
  const sw = event.target.scrollWidth;
  const ox = event.nativeEvent.offsetX;
  const xCoord = Math.floor(2500 / (sw / ox));

  const sh = event.target.scrollHeight;
  const oy = event.nativeEvent.offsetY;
  const yCoord = Math.floor(1775 / (sh / oy));

  return [xCoord, yCoord];
}
