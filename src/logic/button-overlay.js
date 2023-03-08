export default function loadButtonOverlay() {
  const player = get('player')[0];

  const moveUp = add([
    sprite('arrow-button'),
    pos(center().x, height() - 205),
    scale(5),
    area(),
    rotate(180),
    anchor('center'),
    z(4),
    'arrow',
  ]);

  const moveRight = add([
    sprite('arrow-button'),
    pos(center().x + 75, height() - 130),
    scale(5),
    area(),
    anchor('center'),
    rotate(270),
    z(4),
    'arrow',
  ]);

  const moveLeft = add([
    sprite('arrow-button'),
    pos(center().x - 75, height() - 130),
    scale(5),
    area(),
    anchor('center'),
    rotate(90),
    z(4),
    'arrow',
  ]);

  const moveDown = add([
    sprite('arrow-button'),
    pos(center().x, height() - 55),
    scale(5),
    area(),
    anchor('center'),
    z(4),
    'arrow',
  ]);

  let pointer = add([
    sprite('pointer'),
    pos(mousePos()),
    scale(2),
    area({ scale: 1.5 }),
    anchor('center'),
    z(4),
    'pointer',
  ]);

  onMouseDown((pos) => {
    pointer.pos = pos;
  });

  onMouseRelease(() => {
    pointer.pos.x = 0;
    pointer.pos.y = 0;
  });

  // MOUSE MOVEMENTS
  pointer.onUpdate(() => {
    if (pointer.isColliding(moveUp)) {
      if (player.pos.y > 0) {
        player.move(0, -player.moveSpeed);
      }
    }
    if (pointer.isColliding(moveDown)) {
      if (player.pos.y < height()) {
        player.move(0, player.moveSpeed);
      }
    }
    if (pointer.isColliding(moveLeft)) {
      if (player.pos.x > 0) {
        player.move(-player.moveSpeed, 0);
      }
    }
    if (pointer.isColliding(moveRight)) {
      if (player.pos.x < width()) {
        player.move(player.moveSpeed, 0);
      }
    }
  });
}
