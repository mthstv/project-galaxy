export default function handlePlayerMovementAnimations(moveSpeed) {
  const player = get("player")[0];

  keyDown("up", () => {
    if (player.pos.y > 0) {
      player.move(0, -moveSpeed);
    }
  });

  keyDown("down", () => {
    if (player.pos.y < height()) {
      player.move(0, moveSpeed);
    }
  });

  keyDown("left", () => {
    if (player.pos.x > 0) {
      player.move(-moveSpeed, 0);
    }
  });

  keyDown("right", () => {
    if (player.pos.x < width()) {
      player.move(moveSpeed, 0);
    }
  });

  // animations 
  keyPress("left", () => {
    if (keyIsDown("x")) {
      player.play("leanedLeftShoot", { loop: true });
    } else {
      player.play("leanedLeft", { loop: true });
    }
  });
  keyRelease("left", () => {
    if (keyIsDown("x") && keyIsDown("right")) {
      player.play("leanedRightShoot", { loop: true });
    } else if (keyIsDown("right")) {
      player.play("leanedRight", { loop: true });
    } else if (keyIsDown("x")) {
      player.play("shoot", { loop: true });
    } else {
      player.play("idle", { loop: true });
    }
  });

  keyPress("right", () => {
    if (keyIsDown("x")) {
      player.play("leanedRightShoot", { loop: true });
    } else {
      player.play("leanedRight", { loop: true });
    }
  });
  keyRelease("right", () => {
    if (keyIsDown("x") && keyIsDown("left")) {
      player.play("leanedLeftShoot", { loop: true });
    } else if (keyIsDown("left")) {
      player.play("leanedLeft", { loop: true });
    } else if (keyIsDown("x")) {
      player.play("shoot", { loop: true });
    } else {
      player.play("idle", { loop: true });
    }
  });

  keyPress("x", () => {
    if (keyIsDown("left")) {
      player.play("leanedLeftShoot", { loop: true });
    } else if (keyIsDown("right")) {
      player.play("leanedRightShoot", { loop: true });
    } else {
      player.play("shoot", { loop: true });
    }
  });

  keyRelease("x", () => {
    if (keyIsDown("left")) {
      player.play("leanedLeft", { loop: true });
    } else if (keyIsDown("right")) {
      player.play("leanedRight", { loop: true });
    } else {
      player.play("idle", { loop: true });
    }
  });
}