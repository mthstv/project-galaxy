import { BULLET_DAMAGE } from "../helpers/constants.js";

export default function loadBullet() {
  const player = get("player")[0];

  const canceller = loop(player.shootSpeed, () => {
    if (player.isAlive() && !player.isInvincible() && (isKeyDown("x") || isKeyDown("l"))) {
      play("shoot", { volume: 0.05 });
      add([
        sprite("red-bullet"),
        area({ scale: 0.8 }),
        origin("center"),
        pos(player.pos.x, player.pos.y - 18),
        scale(1.8),
        "bullet",
        { damage: BULLET_DAMAGE }
      ]);

      for(let n = 1; n < player.powerUps.bullets; n++) {
        if (n % 2 === 0) {
          wait(0.05, () => {
            add([
              sprite("purple-bullet"),
              area({ scale: 0.8 }),
              origin("center"),
              pos(player.pos.x - (6 * n), player.pos.y + (2 * n)),
              scale(0.8),
              "bullet",
              { damage: BULLET_DAMAGE / 4 }
            ]);
            add([
              sprite("purple-bullet"),
              area({ scale: 0.8 }),
              origin("center"),
              pos(player.pos.x + (6 * n), player.pos.y + (2 * n)),
              scale(0.8),
              "bullet",
              { damage: BULLET_DAMAGE / 4 }
            ]);
          })
        }
        if (n < 6) {
          add([
            sprite("red-bullet"),
            area({ scale: 0.8 }),
            origin("center"),
            pos(player.pos.x - (12 * n), player.pos.y + (4 * n)),
            scale(1.5),
            "bullet",
            { damage: BULLET_DAMAGE / 2 }
          ]);
          add([
            sprite("red-bullet"),
            area({ scale: 0.8 }),
            origin("center"),
            pos(player.pos.x + (12 * n), player.pos.y + (4 * n)),
            scale(1.5),
            "bullet",
            { damage: BULLET_DAMAGE / 2 }
          ]);
        }
        // DIAGONAL ARROWS
        // if (n >= 6 && n <= PLAYER_MAX_LVL) {
        //   add([
        //     sprite("yellow-bullet"),
        //     area({ scale: 0.8 }),
        //     origin("center"),
        //     pos(player.pos.x - (12 * n), player.pos.y + (4 * n)),
        //     scale(1),
        //     rotate(-10),
        //     color(255, 100, 0),
        //     "bullet",
        //     "diagonal-left",
        //     { damage: BULLET_DAMAGE / 4 }
        //   ]);
        //   add([
        //     sprite("yellow-bullet"),
        //     area({ scale: 0.8 }),
        //     origin("center"),
        //     pos(player.pos.x + (12 * n), player.pos.y + (4 * n)),
        //     scale(1),
        //     rotate(10),
        //     color(255, 100, 0),
        //     "bullet",
        //     "diagonal-right",
        //     { damage: BULLET_DAMAGE / 4 }
        //   ]);
        // }
      }
    }
  });
  return canceller;
}