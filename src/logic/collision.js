import loadCounter from "./counter.js";

export default function loadCollisions() {
  collides("enemy", "bullet", (a, b) => {
    a.hurt(b.damage);
    loadCounter(b.damage, a.pos);
    play("hit", { volume: 0.05 })
    b.destroy();
  });

  collides("player", "enemy", (p, e) => {
    if (p.isInvincible()) {
      return;
    }
    p.hurt(e.damage);
    loadCounter(e.damage, p.pos, 1.8, false, "hurt");

    p.reloadMeters();

    shake(3);
    if (e.is("asteroid")) {
      e.destroy();
    }
  });
}