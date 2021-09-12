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
        area({ scale: 0.8 }),
        origin("center"),
        pos(player.pos.x, player.pos.y - 20),
        scale(1),
        "bullet"
      ]);

      bullet.play("fly", { loop: true });
      bullet.collides("asteroid", (a) => {
        a.hurt(damage);

        add([
          text("-" + damage),
          pos(a.pos),
          origin("botleft"),
          lifespan(0.5),
          scale(1),
        ]);

        bullet.destroy();
        shake(2);
      });
    }
  });
}