import {
  ASTEROID_DAMAGE,
  ASTEROID_LIFE,
  ASTEROID_SPEED,
  PLAYER_MAX_LVL,
  SPECIAL_METER_GAIN_ON_KILL
} from "../helpers/constants.js";
import loadCounter from "./counter.js";

export default function loadAsteroid(scoreCounter) {
  const player = get("player")[0];

  loop(0.5, () => {
    const size = rand(20, 50) / 10;
    const asteroid = add([
      sprite("asteroid"),
      pos(rand(0, width()), -20),
      scale(size),
      area({ scale: 0.8 }),
      origin("center"),
      health(Math.round(ASTEROID_LIFE * (size))),
      rotate(rand(-30, 30)),
      "asteroid",
      "enemy",
      {
        damage: Math.round(ASTEROID_DAMAGE * (size)),
        size: Math.round(size)
      }
    ]);
    asteroid.play("fly", { loop: true });
    asteroid.collides("bullet", (b) => {
      asteroid.hurt(b.damage);
      loadCounter(b.damage, asteroid.pos);

      b.destroy();
    });
    // asteroid.collides("asteroid", (a) => {
    //   a.destroy();
    //   asteroid.destroy();
    // });
  });

  action("asteroid", (a) => {
    a.move(a.angle * (-6), ASTEROID_SPEED / a.size);

    if (a.pos.y > height() + 40 || a.pos.x > width() + 40 || a.pos.x < -40) {
      a.destroy();
    }

    if (a.hp() <= 0) {
      a.destroy();
      scoreCounter.value += (1 * a.size);
      scoreCounter.text = scoreCounter.value;

      if (player.lvl < PLAYER_MAX_LVL) {
        player.special += SPECIAL_METER_GAIN_ON_KILL;
      }
      player.reloadMeters();
    }
  });
}