import { BOSS_SPAWN_BACKGROUND_LIMIT } from "../helpers/constants.js";
import loadCounter from "./counter.js";

export default function loadBoss() {
  const player = get("player")[0];

  if (player.backgroundProgression >= BOSS_SPAWN_BACKGROUND_LIMIT) {
    wait(2, () => {
      const boss = add([
        sprite("doom"),
        pos(center().x, 180),
        area({ scale: 0.8 }),
        scale(8),
        origin("center"),
        health(4000),
        layer("game"),
        "enemy",
        { damage: 5 }
      ]);

      boss.collides("bullet", (b) => {
        boss.hurt(b.damage);
        loadCounter(b.damage, boss.pos);

        b.destroy();
      });
    });
  }
}