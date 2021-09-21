import {
  ASTEROID_SPEED,
  PLAYER_MAX_LVL,
  SPECIAL_METER_GAIN_ON_KILL
} from "../helpers/constants.js";
import loadCounter from "./counter.js";

export default function loadAsteroidMovement(scoreCounter) {
  const player = get("player")[0];
  action("asteroid", (a) => {
    a.move(a.angle * (-6) * (1 + (player.lvl / 10)), (ASTEROID_SPEED / a.size) * (1 + (player.lvl / 10)));

    if (a.pos.y > height() + 40 || a.pos.x > width() + 40 || a.pos.x < -40) {
      a.destroy();
    }

    if (a.hp() <= 0) {
      a.destroy();
      scoreCounter.value += (1 * a.size);
      scoreCounter.text = scoreCounter.value;
      loadCounter(1, player.pos, null, true);

      if (player.lvl < PLAYER_MAX_LVL) {
        player.special += SPECIAL_METER_GAIN_ON_KILL;
      }
      player.reloadMeters();
    }
  });
}