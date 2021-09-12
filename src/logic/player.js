import loadPlayerHealth from "../logic/health.js";

export default function loadPlayer(life, asteroidDamage, scoreCounter) {
  const player = add([
    sprite("nav"),
    pos(center()),
    scale(2),
    area({ scale: 0.7 }),
    origin("center"),
    health(life),
    "player",
  ]);

  player.play("idle", { loop: true });
  player.collides("enemy", (e) => {
    player.hurt(asteroidDamage);
    add([
      text("-" + asteroidDamage),
      pos(player.pos.x + 20, player.pos.y - 20),
      origin("botleft"),
      lifespan(0.5),
      scale(1),
    ]);
    destroyAll("hp");
    loadPlayerHealth(life, player.hp());

    shake(10);
    e.destroy();
    if (player.hp() <= 0) {
      go("end", scoreCounter);
    }
  });

  return player;
}