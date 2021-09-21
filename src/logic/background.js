import { BACKGROUND_SPEED } from "../helpers/constants.js";

export default function loadBackgrounds() {
  const player = get("player")[0];
  const bgWidth = width() > 1280 ? width() : 1280;
  const bgHeight = height() > 720 ? height() : 720;
  add([
    sprite("galaxy", { width: bgWidth, height: bgHeight, }),
    "bg",
    pos(0, 0),
    layer("bg"),
  ]);

  add([
    sprite("galaxy2", { width: bgWidth, height: bgHeight, }),
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
      console.log(player.backgroundProgression);
      if (b.is("bgaux")) {
        add([
          sprite("galaxy2", { width: bgWidth, height: bgHeight, }),
          "bg",
          "bgaux",
          pos(0, -height()),
          layer("bg"),
        ]);
      } else {
        add([
          sprite("galaxy", { width: bgWidth, height: bgHeight, }),
          "bg",
          pos(0, -height()),
          layer("bg"),
        ]);
      }
    }
  });
}