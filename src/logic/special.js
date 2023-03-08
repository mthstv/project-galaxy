import { PLAYER_MAX_LVL, PLAYER_SPECIAL_LIMIT } from '../helpers/constants.js';
import loadSpecialUpgrade from './special-upgrade.js';

export default function loadPlayerSpecialMeter(
  specialLimit = PLAYER_SPECIAL_LIMIT,
  currentSpecial = 0
) {
  const player = get('player')[0];

  for (let n = 1; n <= specialLimit; n++) {
    if (n > currentSpecial) {
      add([
        sprite('special-point-empty'),
        pos((n - 1) * 22, height() - 40),
        scale(2),
        z(3),
        anchor('botleft'),
        'sp',
      ]);
    }

    add([
      sprite('special-point-filled'),
      pos((n - 1) * 22, height() - 40),
      scale(2),
      z(2),
      anchor('botleft'),
      'sp',
    ]);
  }

  if (player && player.lvl === PLAYER_MAX_LVL) {
    add([
      text('MAX LVL', { font: 'sinko' }),
      pos(26, height() - 38),
      scale(1.5),
      z(3),
      anchor('botleft'),
      color(0, 198, 255),
      'sp',
    ]);
  }

  if (specialLimit <= currentSpecial && player.lvl < 10) {
    player.special = 0;
    player.reloadMeters();
    loadSpecialUpgrade(player);
  }
}
