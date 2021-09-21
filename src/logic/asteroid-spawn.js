import {
  ASTEROID_DAMAGE,
  ASTEROID_LIFE,
} from "../helpers/constants.js";
import loadCounter from "./counter.js";

export default function loadAsteroidSpawn(asteroidSpawnRate = 0.3) {
  const player = get("player")[0];

  loop(asteroidSpawnRate, () => {
    const size = rand(20, 50) / 10;
    const asteroid = add([
      sprite("asteroid"),
      pos(rand(0, width()), -20),
      scale(size),
      area({ scale: 0.8 }),
      origin("center"),
      health(Math.round((ASTEROID_LIFE * size) * (player.lvl / 4))),
      rotate(rand(-30, 30)),
      "asteroid",
      "enemy",
      {
        damage: Math.round(ASTEROID_DAMAGE * size),
        size: Math.round(size)
      }
    ]);
    asteroid.play("fly", { loop: true });
    asteroid.collides("bullet", (b) => {
      asteroid.hurt(b.damage);
      loadCounter(b.damage, asteroid.pos);

      b.destroy();
    });
    player.action(() => {
      if (player.isColliding(asteroid) && !player.isInvincible()) {
        player.hurt(asteroid.damage);
        loadCounter(asteroid.damage, player.pos, 1.8);
    
        player.reloadMeters();
    
        shake(3);
        asteroid.destroy();
      }
    });
    // asteroid.collides("asteroid", (a) => {
    //   a.destroy();
    //   asteroid.destroy();
    // });
    // console.log("--------------------------");
    // console.log("Health: ", asteroid.hp());
    // console.log("Speed: ", (ASTEROID_SPEED / asteroid.size));
    // console.log("PlayerLVL: ", player.lvl);
    // console.log("Adaptative variable: ", 1 + ((player.lvl / 10) / 2));
    // console.log("Adaptative speed: ", (ASTEROID_SPEED / asteroid.size) * (1 + ((player.lvl / 10) / 2)));
    // console.log("--------------------------");
  });
}