import {
  INITIAL_PLAYER_TOTAL_LIFE,
  INITIAL_PLAYER_SHOOT_SPEED,
  PLAYER_SPECIAL_LIMIT,
  INITIAL_PLAYER_MOVE_SPEED,
  INITIAL_PLAYER_LVL
} from "../helpers/constants.js";
import loadPlayerHealthMeter from "./health.js";
import loadPlayerSpecialMeter from "./special.js";

export default function loadPlayer(scoreCounter) {
  const player = add([
    sprite("nav"),
    pos(center().x, height() - 100),
    scale(2),
    area({ scale: 0.6 }),
    origin("center"),
    health(INITIAL_PLAYER_TOTAL_LIFE),
    "player",
    {
      special: 0,
      shootSpeed: INITIAL_PLAYER_SHOOT_SPEED,
      moveSpeed: INITIAL_PLAYER_MOVE_SPEED,
      lvl: INITIAL_PLAYER_LVL,
      dead: false,
      isAlive: () => !player.dead,
      invincible: false,
      isInvincible: () => player.invincible,
      reloadMeters: () => {
        destroyAll("hp");
        loadPlayerHealthMeter(INITIAL_PLAYER_TOTAL_LIFE, player.hp());

        destroyAll("sp");
        loadPlayerSpecialMeter(PLAYER_SPECIAL_LIMIT, player.special);
      },
      backgroundProgression: 0,
      asteroidsDestroyed: 0,
      powerUps: {
        meleeThrusts: 0, // Adds a melee hitbox in front of the player, more = more damage
        bullets: 1, // Adds more bullets to your shots
        diagonalBullets: 0, // Adds diagonal bullets to your shots
        rockets: 0, // Adds roaming rockets to your shots
        thunders: 0, // Adds thunderbolts to your shots
        beams: 0, // Adds a ray beam to your shots
        defenses: 0, // Adds an orb that rotates around the player, blocking shots
        helpers: 0, // Adds a helper drone that shoots weaker shots
        heals: 0, // Heals the player for 80% > 50% > 20%
        spMultipliers: 1, // Levels up faster then usual
        knockbackBullets: 0, // Adds knockback effect to all shots
        pierceBullets: 0, // Adds piercing effect to all shots
        seekingBullets: 0, // Adds roaming effect to all shots
        moveSpeedMultiplier: 1, // Speeds up the player
        attackSpeedMultiplier: 1, // Speeds up player's attack speed
        dodgeIFramesMultiplier: 1, // Adds more iframes to the dodge skill
      }
    }
  ]);

  player.play("idle", { loop: true });

  player.onUpdate(() => {
    // player.angle = player.pos.angle(mousePos()) - 90;
    if (player.hp() <= 0) {
      const asteroidsDestroyed = player.asteroidsDestroyed;
      player.dead = true;
      player.destroy();
      
      wait(0.5, () => {
        go("end", scoreCounter, asteroidsDestroyed);
      })
    }
  })

  return player;
}