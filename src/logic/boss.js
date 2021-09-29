import { BOSS_SPAWN_BACKGROUND_LIMIT } from "../helpers/constants.js";

export default function loadBoss(scoreCounter) {
  const player = get("player")[0];

  if (player && player.backgroundProgression === BOSS_SPAWN_BACKGROUND_LIMIT) {
    player.backgroundProgression++;
    wait(2, () => {
      const boss = add([
        sprite("doom"),
        pos(center().x, 180),
        area({ scale: 0.8 }),
        scale(7),
        origin("center"),
        health(400),
        layer("game"),
        "enemy",
        "boss",
        { damage: 5 }
      ]);
      const canceller = loop(1.5, () => {
        for(let n = 1; n <= 6; n++) {
          add([
            sprite("enemy-bullet"),
            area({ scale: 0.3 }),
            origin("center"),
            pos(boss.pos.x, boss.pos.y + 40),
            scale(2),
            health(8),
            "enemy-bullet",
            "enemy",
            {
              damage: 4,
              ySpeed: 20 * (n / 2),
              xSpeed: (6 - n) * 20
            }
          ]);
        }
        for(let n = 1; n <= 6; n++) {
          add([
            sprite("enemy-bullet"),
            area({ scale: 0.3 }),
            origin("center"),
            pos(boss.pos.x, boss.pos.y + 40),
            scale(2),
            health(8),
            "enemy-bullet",
            "enemy",
            {
              damage: 4,
              ySpeed: 20 * (n / 2),
              xSpeed: (6 - n) * -20
            }
          ]);
        }
      });
      action("boss", (b) => {
        if (b.hp() <= 0) {
          b.destroy();
          canceller();
          scoreCounter.value += 200;
          scoreCounter.text = scoreCounter.value;
          wait(2, () => go("end", scoreCounter, player.asteroidsDestroyed));
        }
      });
    });
    action("enemy-bullet", (b) => {
      b.move(b.xSpeed, b.ySpeed);

      if (b.pos.y > height() || b.hp() <= 0 || b.pos.x < 0 || b.pos.x > width()) {
        b.destroy();
      }
    });
  }
}