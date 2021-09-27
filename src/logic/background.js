import { BACKGROUND_SPEED } from "../helpers/constants.js";
import loadBoss from "./boss.js";

export default function loadBackgrounds() {
  const player = get("player")[0];
  const bgWidth = width() > 1280 ? width() : 1280;
  const bgHeight = height() > 720 ? height() : 720;
  add([
    sprite("galaxy-new", { width: bgWidth, height: bgHeight, anim: "two" }),
    "bg",
    pos(0, 0),
    layer("bg"),
  ]);

  add([
    sprite("galaxy-new", { width: bgWidth, height: bgHeight, anim: "one" }),
    "bg",
    "bgaux",
    pos(0, -height()),
    layer("bg"),
  ]);

  action("bg", (b) => {
    b.move(0, BACKGROUND_SPEED);
    if (b.pos.y > height()) {
      b.destroy();
      player.backgroundProgression++;
      loadBoss();
      if (b.is("bgaux")) {
        add([
          sprite("galaxy-new", { width: bgWidth, height: bgHeight, anim: "one" }),
          "bg",
          "bgaux",
          pos(0, -height() + 2),
          layer("bg"),
        ]);
      } else {
        add([
          sprite("galaxy-new", { width: bgWidth, height: bgHeight, anim: "two" }),
          "bg",
          pos(0, -height() + 2),
          layer("bg"),
        ]);
      }
    }
  });
}