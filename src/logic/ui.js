import { bulletPowerUp, healPowerUp } from './power-ups.js';

export default function loadUi() {
  const scoreCounter = add([
    text(0, { font: 'sinko', size: 32 }),
    anchor('topleft'),
    z(3),
    scale(2),
    { value: 0 },
  ]);

  return scoreCounter;
}
export function loadPowerUpUi(currentLanguage) {
  const player = get('player')[0];
  debug.paused = true;
  add([
    pos(center().x, center().y - 100),
    rect(800, 200),
    anchor('center'),
    color(255, 255, 255),
    opacity(0.3),
    'power-up-ui',
  ]);
  add([
    text(`${currentLanguage.powerUps.selection} 1`, {
      font: 'sinko',
      size: 16,
    }),
    pos(center().x - 180, center().y - 180),
    'power-up-ui',
    anchor('center'),
  ]);

  add([
    pos(center().x - 180, center().y - 100),
    rect(120, 120),
    anchor('center'),
    color(20, 20, 20),
    opacity(1),
    'power-up-ui',
  ]);

  add([
    sprite('bullet-power-up'),
    pos(center().x - 180, center().y - 100),
    anchor('center'),
    z(4),
    'power-up-ui',
    scale(6),
  ]);

  add([
    text(`+1 ${currentLanguage.powerUps.bullet}`, {
      font: 'sinko',
      size: 16,
    }),
    pos(center().x - 180, center().y - 20),
    'power-up-ui',
    anchor('center'),
  ]);

  add([
    text(`${currentLanguage.powerUps.selection} 2`, {
      font: 'sinko',
      size: 16,
    }),
    pos(center().x + 180, center().y - 180),
    'power-up-ui',
    anchor('center'),
  ]);

  add([
    pos(center().x + 180, center().y - 100),
    rect(120, 120),
    anchor('center'),
    color(20, 20, 20),
    opacity(1),
    'power-up-ui',
  ]);

  add([
    sprite('heal-power-up'),
    pos(center().x + 180, center().y - 100),
    anchor('center'),
    z(4),
    'power-up-ui',
    scale(6),
  ]);

  add([
    text(`${currentLanguage.powerUps.heal} 50%`, { font: 'sinko', size: 16 }),
    pos(center().x + 180, center().y - 20),
    'power-up-ui',
    anchor('center'),
  ]);

  return player.powerUps.lastSelectedPowerUp;
}

export function handlePowerUpSelect() {
  const player = get('player')[0];

  onKeyPress('1', () => {
    if (debug.paused) {
      player.powerUps.lastSelectedPowerUp = 1;
      debug.paused = false;
      const powerUpUi = get('power-up-ui');
      powerUpUi.forEach((p) => p.destroy());
      bulletPowerUp(player);
    }
  });

  onKeyPress('2', () => {
    if (debug.paused) {
      player.powerUps.lastSelectedPowerUp = 2;
      debug.paused = false;
      const powerUpUi = get('power-up-ui');
      powerUpUi.forEach((p) => p.destroy());
      healPowerUp(player);
    }
  });
}
