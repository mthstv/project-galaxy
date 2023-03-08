import { INITIAL_PLAYER_TOTAL_LIFE } from '../helpers/constants.js';

export default function loadPlayerHealthMeter(
  totalLife = INITIAL_PLAYER_TOTAL_LIFE,
  currentLife = INITIAL_PLAYER_TOTAL_LIFE
) {
  for (let n = 0; n < totalLife; n++) {
    if (n < currentLife) {
      add([
        sprite('health-point-filled'),
        pos(n * 14, height() - 10),
        scale(2),
        z(3),
        anchor('botleft'),
        'hp',
      ]);
    }

    add([
      sprite('health-point-empty'),
      pos(n * 14, height() - 10),
      scale(2),
      z(2),
      anchor('botleft'),
      'hp',
    ]);
  }
}
