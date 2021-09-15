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
import { isMobile } from "../helpers/constants.js";
import {
  PLAYER_MOVE_SPEED,
  PLAYER_LIFE,
  PLAYER_SPECIAL_LIMIT,
  ASTEROID_LIFE,
  BULLET_DAMAGE,
  ASTEROID_DAMAGE,
  BULLET_SPEED,
  BACKGROUND_SPEED,
  ASTEROID_SPEED,
  INITIAL_PLAYER_SHOOT_SPEED,
  SPECIAL_METER_GAIN_ON_KILL,
} from '../helpers/constants.js';

export function loadGameScene(currentLanguage) {
  scene("game", () => {
    layers([
      "bg",
      "game",
      "ui",
      "overlay",
    ], "game");

    loadTutorial(currentLanguage);
  
    const scoreCounter = loadUi();

    loadBackgrounds(BACKGROUND_SPEED);

    loadPlayer(PLAYER_LIFE, scoreCounter, INITIAL_PLAYER_SHOOT_SPEED);

    loadPlayerHealth(PLAYER_LIFE, PLAYER_LIFE);
    loadPlayerSpecialMeter(PLAYER_SPECIAL_LIMIT, 0);

    if (isMobile) {
      loadButtonOverlay(PLAYER_MOVE_SPEED);
    }

    loadAsteroid(ASTEROID_DAMAGE, ASTEROID_LIFE, ASTEROID_SPEED, scoreCounter, PLAYER_SPECIAL_LIMIT, SPECIAL_METER_GAIN_ON_KILL);
    handlePlayerMovementAnimations(PLAYER_MOVE_SPEED);
    loadBullet(BULLET_SPEED, BULLET_DAMAGE);
  });
}