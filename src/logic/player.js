export default function loadPlayer(life, asteroidDamage) {
  const player = add([
    sprite("nav"),
    pos(center()),
    scale(2),
    area(),
    health(life),
    "player",
  ]);

  player.play("idle", { loop: true });
  player.collides("enemy", (e) => {
    player.hurt(asteroidDamage);
    shake(10);
    e.destroy();
    if (player.hp() <= 0) {
      go("menu");
    }
  });
}