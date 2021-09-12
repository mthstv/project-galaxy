export default function loadAsteroid(life, speed) {
  loop(1, () => {
    const asteroid = add([
      sprite("asteroid"),
      pos(rand(0, width()), -height() + 600),
      scale(2),
      area(),
      health(life),
      "asteroid",
      "enemy"
    ]);
    
    asteroid.play("fly", { loop: true });
  });

  action("asteroid", (a) => {
    a.move(0, speed);
    if (a.pos.y > 700) {
      a.destroy();
    }
    if (a.hp() <= 0) {
      a.destroy();
    }
  });
}