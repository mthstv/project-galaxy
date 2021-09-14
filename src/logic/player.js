import loadPlayerHealth from "../logic/health.js";

export default function loadPlayer(life, scoreCounter, shootSpeed) {
  const player = add([
    sprite("nav"),
    pos(center().x, height() - 100),
    scale(2),
    area({ scale: 0.7 }),
    origin("center"),
    health(life),
    "player",
    { special: 0, shootSpeed }
  ]);

  player.play("idle", { loop: true });
  player.collides("enemy", (e) => {
    player.hurt(e.damage);
    add([
      text("-" + e.damage),
      pos(player.pos.x + 20, player.pos.y - 20),
      origin("botleft"),
      lifespan(0.5),
      scale(1.8),
    ]);
    destroyAll("hp");
    loadPlayerHealth(life, player.hp());

    shake(3);
    e.destroy();
    if (player.hp() <= 0) {
      player.destroy();
      
      wait(0.5, () => {
        go("end", scoreCounter);
      })
    }
  });

  return player;
}