export default function handlePlayerMovementAnimations(player, moveSpeed) {
  keyDown("up", () => {
    player.move(0, -moveSpeed)
  });

  keyDown("down", () => {
    player.move(0, moveSpeed)
  });

  // Moving Left with animation 
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
  keyDown("left", () => {
    player.move(-moveSpeed, 0);
  });

  // Moving Right with animation 
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
  keyDown("right", () => {
    player.move(moveSpeed, 0);
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