import {
  ASTEROID_DAMAGE,
  ASTEROID_LIFE,
  ASTEROID_SPEED,
  BOSS_SPAWN_BACKGROUND_LIMIT,
} from "../helpers/constants.js";
import loadCounter from "./counter.js";

export default function loadAsteroidSpawn(asteroidSpawnRate = 0.4) {
  const player = get("player")[0];

  const canceller = loop(asteroidSpawnRate, () => {
    if (player && player.backgroundProgression < BOSS_SPAWN_BACKGROUND_LIMIT) {
      const size = rand(20, 50) / 10;
      const asteroidAngle = rand(-30, 30);
      const asteroid = add([
        sprite("asteroid"),
        pos(rand(0, width()), -20),
        scale(size),
        area({ scale: 0.8 }),
        origin("center"),
        health(Math.round((ASTEROID_LIFE * size) * ((player.backgroundProgression + 1) / 6))),
        rotate(asteroidAngle),
        "asteroid",
        "enemy",
        layer("game"),
        {
          damage: Math.round(ASTEROID_DAMAGE * size),
          size: Math.round(size),
          moveSpeed: [asteroidAngle * (-6) * (1 + (player.backgroundProgression / 10)), (ASTEROID_SPEED / size) * (1 + (player.backgroundProgression / 10))],
        }
      ]);
      asteroid.play("fly", { loop: true });
      player.onUpdate(() => {
        if (player.isColliding(asteroid) && !player.isInvincible()) {
          player.hurt(asteroid.damage);
          loadCounter(asteroid.damage, player.pos, 1.8, false, "hurt");
      
          player.reloadMeters();
      
          shake(3);
          asteroid.destroy();
        }
      });
    }
  });

  return canceller;
}