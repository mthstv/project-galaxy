kaboom({
	global: true,
	// debug mode (F1 to inspect, F8 to pause, F7 F9 to manipulate time, F10 to skip frame)
	debug: true,
	fullscreen: true,
	// pixel scale
	scale: 2,
	// black background color
	clearColor: [ 0, 0, 0, 1 ],
});

// load assets
loadSprite("nav", "/assets/sprites/nav-spreadsheet-5x5.png", {
  sliceX: 5,
  sliceY: 5,
  anims: {
    idle: {
        from: 0,
        to: 9,
    },
    shoot: {
      from: 10,
      to: 12,
    },
    leaningRight: {
      from: 13,
      to: 14,
    },
    leanedRight: {
      from: 15,
      to: 16,
    },
    leanedRightShoot: {
      from: 17,
      to: 19,
    },
    leaningLeft: {
      from: 20,
      to: 22,
    },
    leanedLeft: {
      from: 23,
      to: 24,
    },
    leanedLeftShoot: {
      from: 25,
      to: 27,
    },
  },
});
loadSprite("galaxy", "/assets/sprites/galaxy.jpg");
loadSound("blip", "/assets/sounds/blip.mp3");

// defining a scene
scene("game", () => {
	// define layers and the default layer
	layers([
		"game",
		"ui",
	], "game");

	// background
	add([
		sprite("galaxy", { width: width(), height: height(), }),
	]);

	// player
	const player = add([
		sprite("nav"),
		pos(center()),
    scale(4),
		area(),
	]);

  player.play("idle");
  const MOVE_SPEED = 200;

	let score = 0;

	const scoreLabel = add([
		text(score, 16),
		pos(12, 12),
		layer("ui"),
	]);

  keyDown("left", () => {
    player.move(-MOVE_SPEED, 0)
  });

  keyDown("right", () => {
    player.move(MOVE_SPEED, 0)
  });

  keyDown("up", () => {
    player.move(0, -MOVE_SPEED)
  });

  keyDown("down", () => {
    player.move(0, MOVE_SPEED)
  });

	keyPress("x", () => {
    score += 1;
    scoreLabel.text = score;
		play("blip");
    player.play("shoot");
    setTimeout(() => {
      player.play("idle");
    }, 500)
	});

	keyPress("z", () => {
    score += 1;
    scoreLabel.text = score;
		play("blip");
    player.play("shoot");
    setTimeout(() => {
      player.play("idle");
    }, 500)
	});
});

scene("lose", (score) => {
	add([
		text(score, 32),
		pos(center()),
		origin("center"),
	]);

	keyPress("space", () => {
		go("game");
	});

});

go("game");