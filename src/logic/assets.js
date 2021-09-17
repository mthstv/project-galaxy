export default function loadAssets() {
  loadSprite("galaxy", "/assets/sprites/backgrounds/space-breelbo.jpg");
  loadSprite("galaxy2", "/assets/sprites/backgrounds/space-breelbo2.jpg");
  loadSprite("galaxy3", "/assets/sprites/backgrounds/space-breelbo3.jpg");
  loadSprite("nav", "/assets/sprites/players/nav-new-spritesheet-320x320.png", {
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

  loadSprite("nav-dash", "/assets/sprites/players/nav-new-spritesheet-320x320.png", {
    sliceX: 10,
    sliceY: 10,
    anims: {
      dash: {
        from: 40,
        to: 43,
      },
    },
  });

  loadSprite("flash", "/assets/sprites/players/originals/flash-original-spritesheet-320x320.png", {
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


  loadSprite("blue-bullet", "/assets/sprites/bullets/blue-spritesheet-180x18.png", {
    sliceX: 10,
    sliceY: 1,
    anims: {
      fly: {
        from: 0,
        to: 9,
      },
    },
  });
  loadSprite("purple-bullet", "/assets/sprites/bullets/purple-9x14.png");
  loadSprite("red-bullet", "/assets/sprites/bullets/red-9x14.png");
  loadSprite("yellow-bullet", "/assets/sprites/bullets/yellow-9x14.png");

  loadSprite("health-point-filled", "/assets/sprites/players/meters/health/hp-filled-7x12.png");
  loadSprite("health-point-empty", "/assets/sprites/players/meters/health/hp-empty-7x12.png");
  loadSprite("special-point-filled", "/assets/sprites/players/meters/special/sp-filled-12x6.png");
  loadSprite("special-point-empty", "/assets/sprites/players/meters/special/sp-empty-12x6.png");

  loadSprite("asteroid", "/assets/sprites/enemies/asteroid-enemy-spritesheet-100x27.png", {
    sliceX: 5,
    sliceY: 1,
    anims: {
      fly: {
        from: 0,
        to: 4,
      },
    },
  });

  loadSound("blip", "/assets/sounds/blip.mp3");

  loadSprite("arrow-button", "/assets/sprites/buttons/arrow.png");
  loadSprite("pointer", "/assets/sprites/buttons/pointer.png");
}