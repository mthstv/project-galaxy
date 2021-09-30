import { BACKGROUND_SPEED } from "../helpers/constants.js";
import loadBoss from "./boss.js";

export default function loadBackgrounds(scoreCounter) {
  const player = get("player")[0];
  const bgWidth = width() > 1280 ? width() : 1280;
  const bgHeight = height() > 720 ? height() : 720;
  add([
    sprite("galaxy1", { width: bgWidth, height: bgHeight }),
    "bg",
    "first",
    pos(0, 0),
    layer("bg"),
  ]);

  add([
    sprite("galaxy2", { width: bgWidth, height: bgHeight }),
    "bg",
    "second",
    pos(0, -height()),
    layer("bg"),
  ]);

  action("bg", (b) => {
    b.move(0, BACKGROUND_SPEED);
    if (b.pos.y > height()) {
      b.destroy();
      player.backgroundProgression++;
      loadBoss(scoreCounter);

      if (b.is("first")) {
        add([
          sprite("galaxy1", { width: bgWidth, height: bgHeight + 2 }),
          "bg",
          "first",
          pos(0, -height()),
          layer("bg"),
        ]);
      }
      if (b.is("second")) {
        add([
          sprite("galaxy2", { width: bgWidth, height: bgHeight + 2 }),
          "bg",
          "second",
          pos(0, -height()),
          layer("bg"),
        ]);
      }
    }
  });
}