import handlePlayerMovementAnimations from '../logic/handlers/player-movement.js';
import loadTutorial from '../logic/tutorial.js';
import loadUi, { handlePowerUpSelect } from '../logic/ui.js';
import loadBackgrounds from '../logic/background.js';
import loadAsteroidSpawn from '../logic/asteroid-spawn.js';
import loadPlayer from '../logic/player.js';
import loadBullet from '../logic/bullet.js';
import loadPlayerHealthMeter from '../logic/health.js';
import loadPlayerSpecialMeter from '../logic/special.js';
import loadBulletSpeed from '../logic/bullet-speed.js';
import loadDodge from '../logic/dodge.js';
import loadAsteroidBehavior from '../logic/asteroid-behavior.js';
import loadCollisions from '../logic/collision.js';

export function loadGameScene(currentLanguage) {
  scene('game', () => {
    loadTutorial(currentLanguage);

    const scoreCounter = loadUi();

    loadPlayer(scoreCounter);

    loadBackgrounds(scoreCounter);

    loadPlayerHealthMeter();
    loadPlayerSpecialMeter();

    const asteroidSpawnCanceller = loadAsteroidSpawn();
    loadAsteroidBehavior(scoreCounter);
    handlePlayerMovementAnimations();
    handlePowerUpSelect();
    const bulletSpawnCanceller = loadBullet();
    loadBulletSpeed();
    loadDodge();
    loadCollisions();
  });
}
