import { BACKGROUND_SPEED } from '../helpers/constants.js';
import loadBoss from './boss.js';

export default function loadBackgrounds(scoreCounter) {
  const player = get('player')[0];
  const bgWidth = width() > 1280 ? width() : 1280;
  const bgHeight = height();
  add([
    sprite('boss-bg-1', { width: bgWidth, height: bgHeight }),
    'bg',
    'first',
    pos(0, 0),
    z(0),
  ]);

  add([
    sprite('boss-bg-2', { width: bgWidth, height: bgHeight }),
    'bg',
    'second',
    pos(0, -height()),
    z(0),
  ]);

  onUpdate('bg', (b) => {
    b.move(0, BACKGROUND_SPEED);
    if (b.pos.y > height()) {
      b.destroy();
      player.backgroundProgression++;
      loadBoss(scoreCounter);

      if (b.is('first')) {
        add([
          sprite('boss-bg-1', { width: bgWidth, height: bgHeight + 2 }),
          'bg',
          'first',
          pos(0, -height()),
          z(0),
        ]);
      }
      if (b.is('second')) {
        add([
          sprite('boss-bg-2', { width: bgWidth, height: bgHeight + 2 }),
          'bg',
          'second',
          pos(0, -height()),
          z(0),
        ]);
      }
    }
  });
}
