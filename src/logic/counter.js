export default function loadCounter(
  n,
  position,
  customScale,
  isAdding = false,
  sound = null,
  customColor = undefined
) {
  if (!customColor) customColor = [255, 255, 255];

  if (sound) play(`${sound}`, { volume: 0.05 });

  if (isAdding) {
    add([
      text('+' + n, { font: 'sinko', size: 16 }),
      pos(position.x + rand(20, 50), position.y + rand(20, 50)),
      anchor('botleft'),
      lifespan(0.5),
      scale(customScale || 1.2),
      color(customColor),
    ]);
  } else {
    add([
      text('-' + n, { font: 'sinko', size: 16 }),
      pos(position.x + rand(20, 50), position.y + rand(20, 50)),
      anchor('botleft'),
      lifespan(0.5),
      scale(customScale || 1.2),
      color(customColor),
    ]);
  }
}
