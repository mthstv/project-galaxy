export default function handlePlayerMovementAnimations() {
  const player = get("player")[0];

  keyDown(["up", "w"], () => {
    if (player.pos.y > 0) {
      player.move(0, -player.moveSpeed);
    }
  });

  keyDown(["down", "s"], () => {
    if (player.pos.y < height()) {
      player.move(0, player.moveSpeed);
    }
  });

  keyDown(["left", "a"], () => {
    if (player.pos.x > 0) {
      player.move(-player.moveSpeed, 0);
    }
  });

  keyDown(["right", "d"], () => {
    if (player.pos.x < width()) {
      player.move(player.moveSpeed, 0);
    }
  });

  // animations 
  keyPress(["left", "a"], () => {
    if (keyIsDown("x")) {
      player.play("leanedLeftShoot", { loop: true });
    } else {
      player.play("leanedLeft", { loop: true });
    }
  });
  keyRelease(["left", "a"], () => {
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

  keyPress(["right", "d"], () => {
    if (keyIsDown("x")) {
      player.play("leanedRightShoot", { loop: true });
    } else {
      player.play("leanedRight", { loop: true });
    }
  });
  keyRelease(["right", "d"], () => {
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