export default function loadButtonOverlay(speed) {
  const player = get("player")[0];

  const moveUp = add([
    sprite("arrow-button"),
    pos(width() - 120, height() - 200),
    scale(4),
    area(),
    rotate(180),
    origin("center"),
    layer("overlay"),
    "arrow",
  ]);

  const moveRight = add([
    sprite("arrow-button"),
    pos(width() - 60, height() - 140),
    scale(4),
    area(),
    origin("center"),
    rotate(270),
    layer("overlay"),
    "arrow",
  ]);

  const moveLeft = add([
    sprite("arrow-button"),
    pos(width() - 180, height() - 140),
    scale(4),
    area(),
    origin("center"),
    rotate(90),
    layer("overlay"),
    "arrow",
  ]);

  const moveDown = add([
    sprite("arrow-button"),
    pos(width() - 120, height() - 80),
    scale(4),
    area(),
    origin("center"),
    layer("overlay"),
    "arrow",
  ]);

  let pointer = add([
    sprite("pointer"),
    pos(mousePos()),
    scale(2),
    area({ scale: 2 }),
    origin("center"),
    layer("overlay"),
    "pointer",
  ]);

  mouseDown((pos) => {
    pointer.pos = pos;
  });

  mouseRelease(() => {
    pointer.pos.x = 0;
    pointer.pos.y = 0;
  })

  // MOUSE MOVEMENTS
  pointer.action(() => {
    if (pointer.isColliding(moveUp)) {
      if (player.pos.y > 0) {
        player.move(0, -speed);
      }
    }
    if (pointer.isColliding(moveDown)) {
      if (player.pos.y < height()) {
        player.move(0, speed);
      }
    }
    if (pointer.isColliding(moveLeft)) {
      if (player.pos.x > 0) {
        player.move(-speed, 0);
      }
    }
    if (pointer.isColliding(moveRight)) {
      if (player.pos.x < width()) {
        player.move(speed, 0);
      }
    }
  });
}