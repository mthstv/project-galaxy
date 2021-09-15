import {
  ASTEROID_DAMAGE,
  ASTEROID_LIFE,
  ASTEROID_SPEED,
  SPECIAL_METER_GAIN_ON_KILL
} from "../helpers/constants.js";

export default function loadAsteroid(scoreCounter) {
  const player = get("player")[0];

  loop(0.5, () => {
    const asteroid = add([
      sprite("asteroid"),
      pos(rand(0, width()), -20),
      scale(2),
      area({ scale: 1 }),
      origin("center"),
      health(ASTEROID_LIFE),
      rotate(rand(-30, 30)),
      "asteroid",
      "enemy",
      { damage: ASTEROID_DAMAGE }
    ]);
    
    asteroid.play("fly", { loop: true });
    asteroid.collides("bullet", (b) => {
      asteroid.hurt(b.damage);

      add([
        text("-" + b.damage),
        pos(asteroid.pos),
        origin("botleft"),
        lifespan(0.5),
        scale(1.2),
      ]);

      b.destroy();
      shake(1);
    });
  });

  action("asteroid", (a) => {
    a.move(a.angle * (-8), ASTEROID_SPEED);

    if (a.pos.y > height()) {
      a.destroy();
    }

    if (a.hp() <= 0) {
      a.destroy();
      scoreCounter.value += 1;
      scoreCounter.text = scoreCounter.value;

      player.special += SPECIAL_METER_GAIN_ON_KILL;
      player.reloadMeters();
    }
  });
}