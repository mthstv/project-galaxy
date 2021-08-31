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
loadSprite("galaxy", "/assets/sprites/galaxy.jpg");
loadSprite("nav", "/assets/sprites/nav-spreadsheet-10x10.png", {
  sliceX: 10,
  sliceY: 10,
  anims: {
    idle: {
        from: 0,
        to: 9,
    },
    shoot: {
      from: 10,
      to: 18,
    },
    leanedRight: {
      from: 20,
      to: 23,
    },
    leanedRightShoot: {
      from: 24,
      to: 27,
    },
    leanedLeft: {
      from: 40,
      to: 43,
    },
    leanedLeftShoot: {
      from: 44,
      to: 47,
    },
  },
});

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
    scale(3),
		area(),
	]);


  const MOVE_SPEED = 200;

  player.play("idle");

  // Moving Left with animation 
  keyPress("left", () => {
    player.play("leanedLeft");
  });
  keyRelease("left", () => {
    player.play("idle");
	});
  keyDown("left", () => {
    player.move(-MOVE_SPEED, 0)
  });

  // Moving Right with animation 
  keyPress("right", () => {
    player.play("leanedRight");
  });
  keyRelease("right", () => {
    player.play("idle");
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
    player.play("shoot");
	});

  keyRelease("x", () => {
    player.play("idle");
	});

	keyPress("z", () => {
    player.play("dodge");
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