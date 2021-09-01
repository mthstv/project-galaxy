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
loadSprite("bullet", "/assets/sprites/bullet-spreadsheet-5x5.png", {
  sliceX: 5,
  sliceY: 5,
  anims: {
    fly: {
        from: 0,
        to: 4,
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
  const BULLET_SPEED = 400;

  player.play("idle");

  keyDown("up", () => {
    player.move(0, -MOVE_SPEED)
  });

  keyDown("down", () => {
    player.move(0, MOVE_SPEED)
  });

  // Moving Left with animation 
  keyPress("left", () => {
    if (keyIsDown('x')) {
      player.play("leanedLeftShoot");
    } else {
      player.play("leanedLeft");
    }
  });
  keyRelease("left", () => {
    if (keyIsDown('x') && keyIsDown('right')) {
      player.play("leanedRightShoot");
    } else if (keyIsDown('right')) {
      player.play("leanedRight");
    } else if (keyIsDown('x')) {
      player.play("shoot");
    } else {
      player.play("idle");
    }
	});
  keyDown("left", () => {
    player.move(-MOVE_SPEED, 0)
  });

  // Moving Right with animation 
  keyPress("right", () => {
    if (keyIsDown('x')) {
      player.play("leanedRightShoot");
    } else {
      player.play("leanedRight");
    }
  });
  keyRelease("right", () => {
    if (keyIsDown('x') && keyIsDown('left')) {
      player.play("leanedLeftShoot");
    } else if (keyIsDown('left')) {
      player.play("leanedLeft");
    } else if (keyIsDown('x')) {
      player.play("shoot");
    } else {
      player.play("idle");
    }
	});
  keyDown("right", () => {
    player.move(MOVE_SPEED, 0)
  });

	keyPress("x", () => {
    const bullet = add([
      sprite("bullet"),
      pos(player.pos.x + 17, player.pos.y - 7),
      scale(1),
      area(),
      {
        dir: vec2(-1, 0),
      }
    ]);

    bullet.play('fly');

    bullet.action(() => {
      bullet.move(0, -BULLET_SPEED);
    });
    
    if (keyIsDown('left')) {
      player.play("leanedLeftShoot");
    } else if (keyIsDown('right')) {
      player.play("leanedRightShoot");
    } else {
      player.play("shoot");
    }
	});

  keyRelease("x", () => {
    if (keyIsDown('left')) {
      player.play("leanedLeft");
    } else if (keyIsDown('right')) {
      player.play("leanedRight");
    } else {
      player.play("idle");
    }
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