export function loadGameScene(currentLanguage) {
  scene("game", () => {
    layers([
      "bg",
      "game",
      "ui",
    ], "game");

    const DEFAULT_PLAYER_MOVE_SPEED = 400;
    const DEFAULT_PLAYER_LIFE = 100;
    const BULLET_SPEED = 500;
    const DEFAULT_BULLET_DAMAGE = 4;
    const BACKGROUND_SPEED = 80;
    const GAME_SCALE_ADJUSTMENTS = {
      playerScale: 2, 
      bulletScale: 1,
      bulletXPosition: 23 
    };
    const ASTEROID_SPEED = 200;
    const DEFAULT_ASTEROID_LIFE = 8;
    const DEFAULT_ASTEROID_DAMAGE = 10;

    let playerShootSpeed = 0.2;

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

    function loadAsteroid() {
      const asteroid = add([
        sprite("asteroid"),
        pos(rand(0, width()), -height() + 400),
        scale(2),
        area(),
        health(DEFAULT_ASTEROID_LIFE),
        "asteroid",
        "enemy"
      ]);
      
      asteroid.play("fly", { loop: true });
      
      action("asteroid", (a) => {
        a.move(0, ASTEROID_SPEED);
        if (a.pos.y > 700) {
          a.destroy();
        }
      });
    }

    loadAsteroid();

    function loadPlayer() {
      const player = add([
        sprite("nav"),
        pos(center()),
        scale(GAME_SCALE_ADJUSTMENTS.playerScale),
        area(),
        "player",
      ]);

      player.play("idle", { loop: true });
      player.collides("enemy", () => {
        player.destroy();
        go("menu");
      });
    }

    
    loadPlayer();
    
    const player = get("player")[0];


    function handlePlayerMovementAnimations() {
      keyDown("up", () => {
        player.move(0, -DEFAULT_PLAYER_MOVE_SPEED)
      });

      keyDown("down", () => {
        player.move(0, DEFAULT_PLAYER_MOVE_SPEED)
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
        player.move(-DEFAULT_PLAYER_MOVE_SPEED, 0);
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
        player.move(DEFAULT_PLAYER_MOVE_SPEED, 0);
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

    handlePlayerMovementAnimations();

    function loadBullet() {
      action("bullet", (b) => {
        b.move(0, -BULLET_SPEED);
    
        if (b.pos.y < -height()) {
          b.destroy();
        }
      });
    
      loop(playerShootSpeed, () => {
        if (keyIsDown("x")) {
          const bullet = add([
            sprite("bullet"),
            area(),
            pos(player.pos.x + GAME_SCALE_ADJUSTMENTS.bulletXPosition, player.pos.y - 10),
            scale(GAME_SCALE_ADJUSTMENTS.bulletScale),
            "bullet"
          ]);
    
          bullet.play("fly", { loop: true });
          bullet.collides("asteroid", (a) => {
            a.hurt(2);
            bullet.destroy();
            shake(5);
          });
        }
      });
    }

    loadBullet();

    // function loadCollisions() {
    //   collides("player", "asteroid", (a, b) => {
    //     console.log(a, b);
    //     b.destroy();
    //   });
    // }
  
    // loadCollisions();
  });
}