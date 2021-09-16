import { isMobile, BULLET_DAMAGE } from "../helpers/constants.js";

export default function loadBullet() {
  const player = get("player")[0];

  loop(player.shootSpeed, () => {
    if (player.isAlive() && keyIsDown("x") || (isMobile && mouseIsDown())) {
      add([
        sprite("blue-bullet", {
          anim: "fly",
        }),
        area({ scale: 0.8 }),
        origin("center"),
        pos(player.pos.x, player.pos.y - 20),
        scale(0.9),
        "bullet",
        { damage: player.lvl > 1 ? BULLET_DAMAGE / 2 : BULLET_DAMAGE },
        color(127, 200, 255)
      ]);

      for(let n = 1; n < player.lvl; n++) {
        if (n < 6) {
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
            sprite("yellow-bullet"),
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
            sprite("yellow-bullet"),
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