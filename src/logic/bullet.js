import { isMobile, BULLET_DAMAGE } from "../helpers/constants.js";

export default function loadBullet() {
  const player = get("player")[0];

  loop(player.shootSpeed, () => {
    if (player.isAlive() && keyIsDown("x") || (isMobile && mouseIsDown())) {
      if (player.lvl === 1) {
        add([
          sprite("blue-bullet", {
            anim: "fly",
          }),
          area({ scale: 0.8 }),
          origin("center"),
          pos(player.pos.x, player.pos.y - 20),
          scale(1),
          "bullet",
          { damage: BULLET_DAMAGE }
        ]);
      }
      if (player.lvl > 1) {
        add([
          sprite("blue-bullet"),
          area({ scale: 0.8 }),
          origin("center"),
          pos(player.pos.x, player.pos.y - 20),
          scale(0.8),
          "bullet",
          { damage: BULLET_DAMAGE / 2 }
        ]);
      }

      for(let n = 1; n < player.lvl; n++) {
        if (n < 5) {
          add([
            sprite("red-bullet"),
            area({ scale: 0.8 }),
            origin("center"),
            pos(player.pos.x - (12 * n), player.pos.y + (5 * n)),
            scale(1.5),
            "bullet",
            { damage: BULLET_DAMAGE / 4 }
          ]);
          add([
            sprite("red-bullet"),
            area({ scale: 0.8 }),
            origin("center"),
            pos(player.pos.x + (12 * n), player.pos.y + (5 * n)),
            scale(1.5),
            "bullet",
            { damage: BULLET_DAMAGE / 4 }
          ]);
        }
        if (n >= 6 && n < 10) {
          add([
            sprite("purple-bullet"),
            area({ scale: 0.8 }),
            origin("center"),
            pos(player.pos.x - (12 * n), player.pos.y + (5 * n)),
            scale(1),
            rotate(-10),
            "bullet",
            "diagonal-left",
            { damage: BULLET_DAMAGE / 4 }
          ]);
          add([
            sprite("purple-bullet"),
            area({ scale: 0.8 }),
            origin("center"),
            pos(player.pos.x + (12 * n), player.pos.y + (5 * n)),
            scale(1),
            rotate(10),
            "bullet",
            "diagonal-right",
            { damage: BULLET_DAMAGE / 4 }
          ]);
        }
      }
    }
  });
}