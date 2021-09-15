import handlePlayerMovementAnimations from "../logic/handlers/player-movement.js";
import loadTutorial from "../logic/tutorial.js";
import loadUi from "../logic/ui.js";
import loadBackgrounds from "../logic/background.js";
import loadAsteroid from "../logic/asteroid.js";
import loadPlayer from "../logic/player.js";
import loadBullet from "../logic/bullet.js";
import loadPlayerHealth from "../logic/health.js";
import loadPlayerSpecialMeter from "../logic/special.js";
import loadButtonOverlay from "../logic/button-overlay.js";

export function loadGameScene(currentLanguage) {
  scene("game", () => {
    layers([
      "bg",
      "game",
      "ui",
      "overlay",
    ], "game");

    // toggle fullscreen mode on "f"
    keyPress("f", (c) => {
      fullscreen(!fullscreen());
    });

    const PLAYER_MOVE_SPEED = 300;
    const PLAYER_LIFE = 10;
    const PLAYER_SPECIAL_LIMIT = 6;
    const ASTEROID_LIFE = 8;
    const BULLET_DAMAGE = 4;
    const ASTEROID_DAMAGE = 3;
    const BULLET_SPEED = 750;
    const BACKGROUND_SPEED = 80;
    const ASTEROID_SPEED = 400;
    const INITIAL_PLAYER_SHOOT_SPEED = 0.3;
    const SPECIAL_METER_GAIN_ON_KILL = 0.5;

    loadTutorial(currentLanguage);
  
    const scoreCounter = loadUi();

    loadBackgrounds(BACKGROUND_SPEED);

    loadPlayer(PLAYER_LIFE, scoreCounter, INITIAL_PLAYER_SHOOT_SPEED);

    loadPlayerHealth(PLAYER_LIFE, PLAYER_LIFE);
    loadPlayerSpecialMeter(PLAYER_SPECIAL_LIMIT, 0);

    if (navigator.userAgentData.mobile) {
      loadButtonOverlay(PLAYER_MOVE_SPEED);
    }

    loadAsteroid(ASTEROID_DAMAGE, ASTEROID_LIFE, ASTEROID_SPEED, scoreCounter, PLAYER_SPECIAL_LIMIT, SPECIAL_METER_GAIN_ON_KILL);
    handlePlayerMovementAnimations(PLAYER_MOVE_SPEED);
    loadBullet(BULLET_SPEED, BULLET_DAMAGE);
  });
}