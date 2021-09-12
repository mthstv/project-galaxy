import loadTutorial from "../logic/tutorial.js";
import loadUi from "../logic/ui.js";
import loadBackgrounds from "../logic/background.js";
import loadAsteroid from "../logic/asteroid.js";
import loadPlayer from "../logic/player.js";
import handlePlayerMovementAnimations from "../logic/handlers/player-movement.js";
import loadBullet from "../logic/bullet.js";
import loadPlayerHealth from "../logic/health.js";

export function loadGameScene(currentLanguage) {
  scene("game", () => {
    layers([
      "bg",
      "game",
      "ui",
    ], "game");

    const PLAYER_MOVE_SPEED = 400;
    const PLAYER_LIFE = 10;
    const ASTEROID_LIFE = 8;
    const BULLET_DAMAGE = 4;
    const ASTEROID_DAMAGE = 3;
    const BULLET_SPEED = 500;
    const BACKGROUND_SPEED = 80;
    const ASTEROID_SPEED = 300;

    loadTutorial(currentLanguage);
  
    let playerShootSpeed = 0.2;
    const scoreCounter = loadUi();

    loadBackgrounds(BACKGROUND_SPEED);
    
    const player = loadPlayer(PLAYER_LIFE, ASTEROID_DAMAGE, scoreCounter);
    loadPlayerHealth(PLAYER_LIFE, PLAYER_LIFE);
    
    loadAsteroid(ASTEROID_LIFE, ASTEROID_SPEED, scoreCounter);
    handlePlayerMovementAnimations(player, PLAYER_MOVE_SPEED);
    loadBullet(player, playerShootSpeed, BULLET_SPEED, BULLET_DAMAGE);
  });
}