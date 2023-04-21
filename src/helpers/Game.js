export default function getCoords(event) {
  // For checking character coordinates against database
  const sw = event.target.scrollWidth;
  const ox = event.nativeEvent.offsetX;
  const xCoord = Math.floor(2500 / (sw / ox));

  const sh = event.target.scrollHeight;
  const oy = event.nativeEvent.offsetY;
  const yCoord = Math.floor(1775 / (sh / oy));

  return { x: xCoord, y: yCoord };
}

export function keepInBounds(event) {
  // Determine size of popup window
  const popup = document.querySelector('.popup');
  const popupWidth = popup.offsetWidth;
  const popupHeight = popup.offsetHeight;

  // Determine size of image
  const imageWidth = event.target.scrollWidth;
  const imageHeight = event.target.scrollHeight;

  // Determine cursor position
  let top = event.nativeEvent.offsetY;
  let left = event.nativeEvent.offsetX;

  // Keep it in bounds
  if (top + popupHeight > imageHeight) {
    top -= top + popupHeight - imageHeight;
  }
  if (left + popupWidth > imageWidth) {
    left -= left + popupWidth - imageWidth;
  }

  return {
    x: left,
    y: top,
  };
}
