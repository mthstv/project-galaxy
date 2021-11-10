export default function loadAssets() {
  loadSprite("boss-bg-1", "/assets/sprites/backgrounds/BGPJG-boss-fight-1.png");
  loadSprite("boss-bg-2", "/assets/sprites/backgrounds/BGPJG-boss-fight-2.png");
  loadSprite("asteroid-fields-bg-1", "/assets/sprites/backgrounds/BGPJG-asteroid-fields-1.png");
  loadSprite("asteroid-fields-bg-2", "/assets/sprites/backgrounds/BGPJG-asteroid-fields-2.png");
  loadSprite("galaxy-stars", "/assets/sprites/backgrounds/BGPJG.png");
  loadSprite("space", "/assets/sprites/backgrounds/space-breelbo.jpg");

  loadSprite("nav", "/assets/sprites/players/nav-spritesheet-320x320.png", {
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

  loadSprite("nav-dash", "/assets/sprites/players/nav-spritesheet-320x320.png", {
    sliceX: 10,
    sliceY: 10,
    anims: {
      dash: { from: 40, to: 43 },
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


  loadSprite("doom", "/assets/sprites/enemies/doom-spritesheet-448x32.png", {
    sliceX: 14,
    sliceY: 1,
    anims: {
      closed: {
        from: 0,
        to: 0,
      },
      opening: {
        from: 1,
        to: 13,
      },
      idle: {
        from: 9,
        to: 13,
      },
    },
  });
  loadSprite("enemy-bullet", "/assets/sprites/bullets/enemy-bullet.png");

  loadSprite("asteroid", "/assets/sprites/enemies/asteroid-spritesheet-100x27.png", {
    sliceX: 5,
    sliceY: 1,
    anims: {
      fly: {
        from: 0,
        to: 4,
      },
    },
  });

  
  loadSprite("orb", "/assets/sprites/misc/orb.png", {
    sliceX: 5,
    sliceY: 1,
    anims: {
      idle: {
        from: 0,
        to: 4,
      },
    },
  });

  loadSound("hit", "/assets/sounds/128971__deadpoetsocietyband__bass-drum.wav");
  loadSound("explosion", "/assets/sounds/170144__timgormly__8-bit-explosion2.mp3");
  loadSound("hurt", "/assets/sounds/448226__inspectorj__explosion-8-bit-01.wav");
  loadSound("dash", "/assets/sounds/444855__matrixxx__jet-bypassing.wav");
  loadSound("shoot", "/assets/sounds/277218__thedweebman__8-bit-laser.wav");
  loadSound("upgrade", "/assets/sounds/341629__projectsu012__coin-insert-or-collecting-item.wav");

  loadSprite("arrow-button", "/assets/sprites/buttons/arrow.png");
  loadSprite("pointer", "/assets/sprites/buttons/pointer.png");
}