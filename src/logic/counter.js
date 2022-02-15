export default function loadCounter(n, position, customScale, isSp = false, isHeal = false, sound = null) {
  if (sound) {
    play(`${sound}`, { volume: 0.2 });
  }
  if (isSp) {
    add([
      text("+" + n, { font: "sinko", size: 16 }),
      pos(position.x + rand(20, 50), position.y + rand(20, 50)),
      origin("botleft"),
      lifespan(0.5),
      scale(customScale || 1.2),
      color(0, 198, 255)
    ]);
  } else if(isHeal) {
    add([
      text("+" + n, { font: "sinko", size: 16 }),
      pos(position.x + rand(20, 50), position.y + rand(20, 50)),
      origin("botleft"),
      lifespan(0.5),
      scale(customScale || 1.2),
      color(0, 255, 198)
    ]);
  } else {
    add([
      text("-" + n, { font: "sinko", size: 16 }),
      pos(position.x + rand(20, 50), position.y + rand(20, 50)),
      origin("botleft"),
      lifespan(0.5),
      scale(customScale || 1.2),
    ]);
  }
}