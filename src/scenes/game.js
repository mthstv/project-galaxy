import handlePlayerMovementAnimations from "../logic/handlers/player-movement.js";
import loadTutorial from "../logic/tutorial.js";
import loadUi from "../logic/ui.js";
import loadBackgrounds from "../logic/background.js";
import loadAsteroid from "../logic/asteroid.js";
import loadPlayer from "../logic/player.js";
import loadBullet from "../logic/bullet.js";
import loadPlayerHealthMeter from "../logic/health.js";
import loadPlayerSpecialMeter from "../logic/special.js";
import loadButtonOverlay from "../logic/button-overlay.js";
import { isMobile } from "../helpers/constants.js";
import loadBulletSpeed from "../logic/bullet-speed.js";
import loadDodge from "../logic/dodge.js";

export function loadGameScene(currentLanguage) {
  scene("game", () => {
    layers([
      "bg",
      "shadow",
      "game",
      "ui",
      "overlay",
    ], "game");

    loadTutorial(currentLanguage);
  
    const scoreCounter = loadUi();

    loadBackgrounds();

    loadPlayer(scoreCounter);

    loadPlayerHealthMeter();
    loadPlayerSpecialMeter();

    if (isMobile) {
      loadButtonOverlay();
    }

    loadAsteroid(scoreCounter);
    handlePlayerMovementAnimations();
    loadBullet();
    loadBulletSpeed();
    loadDodge();
  });
}