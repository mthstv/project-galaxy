export default function loadAssets() {
  loadSprite("galaxy", "/assets/sprites/backgrounds/space-breelbo.jpg");
  loadSprite("galaxy2", "/assets/sprites/backgrounds/space-breelbo2.jpg");
  loadSprite("galaxy3", "/assets/sprites/backgrounds/space-breelbo3.jpg");
  loadSprite("galaxy-new", "/assets/sprites/backgrounds/BGPJG1.png", {
    sliceX: 1,
    sliceY: 2,
    anims: {
      one: {
        from: 0,
        to: 0,
      },
      two: {
        from: 1,
        to: 1,
      },
    },
  });
  loadSprite("galaxy-new-full", "/assets/sprites/backgrounds/BGPJG1.png");
  loadSprite("galaxy-stars", "/assets/sprites/backgrounds/BGPJG01.png");

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

  loadSprite("doom", "/assets/sprites/enemies/doom-enemy-spritesheet-32x32.png");

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

  loadSound("hit", "/assets/sounds/128971_deadpoetsocietyband_bass-drum.mp3");
  loadSound("explosion", "/assets/sounds/170144_timgormly_8-bit-explosion2.mp3");
  loadSound("hurt", "/assets/sounds/448226_inspectorj_explosion-8-bit-01.mp3");
  loadSound("dash", "/assets/sounds/446383__hadahector__electric-woosh.mp3");
  loadSound("shoot", "/assets/sounds/277218_thedweebman_8-bit-laser.mp3");
  loadSound("upgrade", "/assets/sounds/341629_projectsu012_coin-insert-or-collecting-item.mp3");

  loadSprite("arrow-button", "/assets/sprites/buttons/arrow.png");
  loadSprite("pointer", "/assets/sprites/buttons/pointer.png");
}