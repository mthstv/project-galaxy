import { BACKGROUND_SPEED } from "../helpers/constants.js";

export default function loadBackgrounds() {
  add([
    sprite("galaxy", { width: width(), height: height(), }),
    "bg",
    pos(0, 0),
    layer("bg"),
  ]);

  add([
    sprite("galaxy2", { width: width(), height: height(), }),
    "bg",
    "bgaux",
    pos(0, -height()),
    layer("bg"),
  ]);

  action("bg", (b) => {
    b.move(0, BACKGROUND_SPEED);
    if (b.pos.y > height()) {
      b.destroy();
      if (b.is("bgaux")) {
        add([
          sprite("galaxy2", { width: width(), height: height(), }),
          "bg",
          "bgaux",
          pos(0, -height()),
          layer("bg"),
        ]);
      } else {
        add([
          sprite("galaxy", { width: width(), height: height(), }),
          "bg",
          pos(0, -height()),
          layer("bg"),
        ]);
      }
    }
  });
}