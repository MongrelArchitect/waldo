export default function getCoords(event) {
  const sw = event.target.scrollWidth;
  const ox = event.nativeEvent.offsetX;
  const xCoord = Math.floor(2500 / (sw / ox));

  const sh = event.target.scrollHeight;
  const oy = event.nativeEvent.offsetY;
  const yCoord = Math.floor(1775 / (sh / oy));

  return [xCoord, yCoord];
}

export function keepInBounds(event) {
  const popup = document.querySelector('.popup');
  const popupWidth = popup.offsetWidth;
  const popupHeight = popup.offsetHeight;

  const imageWidth = event.target.scrollWidth;
  const imageHeight = event.target.scrollHeight;

  let top = event.nativeEvent.offsetY;
  let left = event.nativeEvent.offsetX;

  if ((top + popupHeight) > imageHeight) {
    top -= (top + popupHeight) - imageHeight;
  }

  if ((left + popupWidth) > imageWidth) {
    left -= (left + popupWidth) - imageWidth;
  }

  return {
    x: left,
    y: top,
  };
}
