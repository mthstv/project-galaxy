export default function loadBullet(speed, damage, shootButton) {
  const player = get("player")[0];

  action("bullet", (b) => {
    b.move(0, -speed);

    if (b.pos.y < -height()) {
      b.destroy();
    }
  });

  let draggin = false;

  if (shootButton) {
    shootButton.clicks(() => {
      draggin = true;
    });
    
    mouseRelease((a) => {
      draggin = false;
    });
  }

  loop(player.shootSpeed, () => {
    if (keyIsDown("x") || draggin) {
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
          scale(1.2),
        ]);

        bullet.destroy();
        shake(1);
      });
    }
  });
}