export default function loadBackgrounds(backgroundSpeed) {
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
    b.move(0, backgroundSpeed);
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