import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
import languages from "./languages.js";

kaboom({
	global: true,
	// debug mode (F1 to inspect, F8 to pause, F7 F9 to manipulate time, F10 to skip frame)
	debug: true,
	fullscreen: true,
	// pixel scale
	scale: 1,
	// black background color
	clearColor: [ 0, 0, 0, 1 ],
  font: "sinko",
});

// load assets
loadSprite("galaxy", "/assets/sprites/backgrounds/space-breelbo.jpg");
loadSprite("galaxy2", "/assets/sprites/backgrounds/space-breelbo2.jpg");
loadSprite("galaxy3", "/assets/sprites/backgrounds/space-breelbo3.jpg");
loadSprite("nav", "/assets/sprites/players/nav2-spritesheet-320x320.png", {
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
      from: 30,
      to: 33,
    },
    leanedLeftShoot: {
      from: 34,
      to: 37,
    },
  },
});
loadSprite("bullet", "/assets/sprites/bullets/blue-spritesheet-180x18.png", {
  sliceX: 10,
  sliceY: 1,
  anims: {
    fly: {
      from: 0,
      to: 9,
    },
  },
});

loadSprite("asteroid", "/assets/sprites/enemies/asteroid-enemy-spritesheet-160x160.png", {
  sliceX: 10,
  sliceY: 1,
  anims: {
    fly: {
      from: 0,
      to: 9,
    },
  },
});

// choose language
let currentLanguage = {};
if (window.navigator.language === "pt-BR") {
  currentLanguage = languages.pt;
} else {
  currentLanguage = languages.en;
}

const MOVE_SPEED = 400;
const BULLET_SPEED = 500;
const BACKGROUND_SPEED = 80;
const GAME_SCALE_ADJUSTMENTS = {
  playerScale: 2, 
  bulletScale: 1,
  bulletXPosition: 23 
};
let PLAYER_SHOOT_SPEED = 0.2;


scene("game", () => {
	layers([
    "bg",
		"game",
		"ui",
	], "game");

  function loadTutorial() {
    add([
		  text(currentLanguage.tutorial, 16),
      pos(center().x, center().y - 40),
      origin("center"),
      layer("ui"),
      scale(2),
      lifespan(2),
    ]);
  }

  loadTutorial();

  function loadBackgrounds() {
    add([
      sprite("galaxy", { width: width(), height: height(), }),
      "bg",
      pos(0, 0),
      layer("bg"),
    ]);
  
    add([
      sprite("galaxy2", { width: width(), height: height(), }),
      "bg",
      "bgaux",
      pos(0, -height()),
      layer("bg"),
    ]);
  
    action("bg", (b) => {
      b.move(0, BACKGROUND_SPEED);
      if (b.pos.y > height()) {
        b.destroy();
        if (b.is("bgaux")) {
          add([
            sprite("galaxy2", { width: width(), height: height(), }),
            "bg",
            "bgaux",
            pos(0, -height()),
            layer("bg"),
          ]);
        } else {
          add([
            sprite("galaxy", { width: width(), height: height(), }),
            "bg",
            pos(0, -height()),
            layer("bg"),
          ]);
        }
      }
    });
  }
  
  loadBackgrounds();

  const player = add([
    sprite("nav"),
    pos(center()),
    scale(GAME_SCALE_ADJUSTMENTS.playerScale),
    area(),
    "player",
  ]);
  
  function loadPlayerMovementAnim() {
    player.play("idle", { loop: true });

    // PLAYER MOVEMENT

    keyDown("up", () => {
      player.move(0, -MOVE_SPEED)
    });

    keyDown("down", () => {
      player.move(0, MOVE_SPEED)
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
      player.move(-MOVE_SPEED, 0);
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
      player.move(MOVE_SPEED, 0);
    });
  }

  loadPlayerMovementAnim();

  function loadBulletAndShootingAnim() {
    action("bullet", (b) => {
      b.move(vec2(0, -BULLET_SPEED));
  
      if (b.pos.y < -height()) {
        b.destroy();
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
  
    loop(PLAYER_SHOOT_SPEED, () => {
      if (keyIsDown("x")) {
        const bullet = add([
          sprite("bullet"),
          pos(player.pos.x + GAME_SCALE_ADJUSTMENTS.bulletXPosition, player.pos.y - 10),
          scale(GAME_SCALE_ADJUSTMENTS.bulletScale),
          "bullet"
        ]);
  
        bullet.play("fly", { loop: true });
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

  loadBulletAndShootingAnim();
});


scene("menu", () => {
  layers([
    "bg",
		"ui",
	], "menu");

  add([
    sprite("galaxy3", { width: width(), height: height(), }),
    pos(0, 0),
    layer("bg"),
  ]);

	add([
		text(currentLanguage.title, 64),
		pos(center()),
		origin("center"),
    layer("ui"),
    scale(2),
	]);

  add([
		text(currentLanguage.subtitle, 16),
		pos(center().x, center().y + 60),
		origin("center"),
    layer("ui"),
    scale(2),
	]);

  add([
		text('developed by @m4ths_dev', 8),
		pos(width(), height() - 20),
		origin("right"),
    layer("ui"),
    scale(1),
	]);

  add([
		text('pixel arts by @m4ths_dev and @breelbo', 8),
		pos(width(), height() - 10),
		origin("right"),
    layer("ui"),
    scale(1),
	]);

	keyPress("space", () => {
		go("game");
	});
});

go("menu");