export default function loadBullet(player, playerShootSpeed, speed, damage) {
  action("bullet", (b) => {
    b.move(0, -speed);

    if (b.pos.y < -height()) {
      b.destroy();
    }
  });

  loop(playerShootSpeed, () => {
    if (keyIsDown("x")) {
      const bullet = add([
        sprite("bullet"),
        area(),
        pos(player.pos.x + 23, player.pos.y - 10),
        scale(1),
        "bullet"
      ]);

      bullet.play("fly", { loop: true });
      bullet.collides("asteroid", (a) => {
        a.hurt(damage);
        bullet.destroy();
        shake(2);
      });
    }
  });
}