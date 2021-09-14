export default function loadButtonOverlay(speed) {
  const player = get("player")[0];

  const shoot = add([
    sprite("shoot-button"),
    pos(60, height() - 200),
    scale(8),
    area(),
    origin("center"),
    layer("overlay"),
  ]);

  const moveRight = add([
    sprite("arrow-button"),
    pos(width() - 60, height() - 140),
    scale(4),
    area(),
    origin("center"),
    layer("overlay"),
    rotate(270),
  ]);

  const moveLeft = add([
    sprite("arrow-button"),
    pos(width() - 180, height() - 140),
    scale(4),
    area(),
    origin("center"),
    layer("overlay"),
    rotate(90),
  ]);

  const moveUp = add([
    sprite("arrow-button"),
    pos(width() - 120, height() - 200),
    scale(4),
    area(),
    rotate(180),
    origin("center"),
    layer("overlay"),
  ]);

  const moveDown = add([
    sprite("arrow-button"),
    pos(width() - 120, height() - 80),
    scale(4),
    area(),
    origin("center"),
    layer("overlay"),
  ]);


  // MOUSE MOVEMENTS
  let movement = {
    x: 0, 
    y: 0
  };

  let movingRight = false;
  moveRight.clicks(() => {
    movingRight = true;
    movement = { ...movement, x: movement.x + speed }
  });

  let movingLeft = false;
  moveLeft.clicks(() => {
    movingLeft = true;
    movement = { ...movement, x: movement.x - speed }
  });

  let movingUp = false
  moveUp.clicks(() => {
    movingUp = true;
    movement = { ...movement, y: movement.y - speed }
  });

  let movingDown = false
  moveDown.clicks(() => {
    movingDown = true;
    movement = { ...movement, y: movement.y + speed }
  });
  
  mouseRelease(() => {
    if (movingRight) {
      movingRight = false;
      movement = { ...movement, x: movement.x - speed }
    }
    if (movingLeft) {
      movingLeft = false;
      movement = { ...movement, x: movement.x + speed }
    }
    if (movingUp) {
      movingUp = false;
      movement = { ...movement, y: movement.y + speed }
    }
    if (movingDown) {
      movingDown = false;
      movement = { ...movement, y: movement.y - speed }
    }
  });

  player.action(() => {
    player.move(movement.x, movement.y);
  })

  return shoot;
}