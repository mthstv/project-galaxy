import loadOrb from "./orb.js";

export default function loadAsteroidBehavior(scoreCounter) {
  const player = get("player")[0];
  onUpdate("asteroid", (a) => {
    a.move(a.moveSpeed[0], a.moveSpeed[1]);

    if (a.pos.y > height() + 40 || a.pos.x > width() + 40 || a.pos.x < -40) {
      a.destroy();
    }

    if (a.hp() <= 0) {
      loadOrb(a.pos);
      a.destroy();
      scoreCounter.value += (1 * a.size);
      player.asteroidsDestroyed += 1;
      scoreCounter.text = scoreCounter.value;
      play("explosion", { volume: 0.05 });
    }
  });
}