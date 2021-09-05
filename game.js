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
loadSprite("galaxy", "/assets/sprites/backgrounds/galaxy.jpg");
loadSprite("galaxy2", "/assets/sprites/backgrounds/galaxy2.jpg");
loadSprite("nav", "/assets/sprites/players/nav-no-fire-spritesheet-10x10.png", {
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
loadSprite("bullet", "/assets/sprites/bullets/blue-spritesheet-5x5.png", {
  sliceX: 5,
  sliceY: 5,
  anims: {
    fly: {
      from: 0,
      to: 4,
    },
  },
});

scene("game", () => {
	layers([
    "bg",
		"game",
		"ui",
	], "game");

	add([
		sprite("galaxy", { width: width(), height: height(), }),
    'bg',
    pos(0, 0),
    layer("bg"),
	]);

  add([
    sprite("galaxy2", { width: width(), height: height(), }),
    'bg',
    'bgaux',
    pos(0, -height()),
    layer("bg"),
  ]);

  action("bg", (b) => {
    b.move(0, 1);
    if (b.pos.y > height()) {
      b.destroy();
      if (b.is('bgaux')) {
        add([
          sprite("galaxy2", { width: width(), height: height(), }),
          'bg',
          'bgaux',
          pos(0, -height()),
          layer("bg"),
        ]);
      } else {
        add([
          sprite("galaxy", { width: width(), height: height(), }),
          'bg',
          pos(0, -height()),
          layer("bg"),
        ]);
      }
    }
  });
  
  const MOVE_SPEED = 200;
  const BULLET_SPEED = 400;
  let PLAYER_SHOOT_SPEED = 0.2;
  const PLAYER_SCALE_ONE = [2, 9.5, 1];
  const PLAYER_SCALE_TWO = [3, 17, 1];

  // PLAYER

	const player = add([
		sprite("nav"),
		pos(center()),
    scale(PLAYER_SCALE_ONE[0]),
		area(),
    "player",
	]);

  player.play("idle");

  // PLAYER MOVEMENT

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
    player.move(-MOVE_SPEED, 0);
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
    player.move(MOVE_SPEED, 0);
  });

  action("bullet", (b) => {
    b.move(vec2(0, -BULLET_SPEED));

    if (b.pos.y < -height()) {
      b.destroy();
    }
  });

	keyPress("x", () => {
    if (keyIsDown('left')) {
      player.play("leanedLeftShoot");
    } else if (keyIsDown('right')) {
      player.play("leanedRightShoot");
    } else {
      player.play("shoot");
    }
	});

  loop(PLAYER_SHOOT_SPEED, () => {
    if (keyIsDown('x')) {
      const bullet = add([
        sprite("bullet"),
        pos(player.pos.x + PLAYER_SCALE_ONE[1], player.pos.y - 2),
        scale(PLAYER_SCALE_ONE[2]),
        "bullet"
      ]);

      bullet.play('fly');
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