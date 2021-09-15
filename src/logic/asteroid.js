import loadPlayerSpecialMeter from "../logic/special.js";

export default function loadAsteroid(damage, life, speed, scoreCounter, specialLimit, specialMeterGain) {
  const player = get("player")[0];

  loop(0.5, () => {
    const asteroid = add([
      sprite("asteroid"),
      pos(rand(0, width()), -20),
      scale(2),
      area({ scale: 1 }),
      origin("center"),
      health(life),
      rotate(rand(-30, 30)),
      "asteroid",
      "enemy",
      { damage }
    ]);
    
    asteroid.play("fly", { loop: true });
    asteroid.collides("bullet", (b) => {
      asteroid.hurt(b.damage);

      add([
        text("-" + b.damage),
        pos(asteroid.pos),
        origin("botleft"),
        lifespan(0.5),
        scale(1.2),
      ]);

      b.destroy();
      shake(1);
    });
  });

  action("asteroid", (a) => {
    a.move(a.angle * (-8), speed);

    if (a.pos.y > height()) {
      a.destroy();
    }

    if (a.hp() <= 0) {
      a.destroy();
      scoreCounter.value += 1;
      scoreCounter.text = scoreCounter.value;

      player.special += specialMeterGain;
      destroyAll("sp");
      loadPlayerSpecialMeter(specialLimit, player.special);
    }
  });
}