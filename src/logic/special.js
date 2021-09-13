export default function loadPlayerSpecialMeter(specialLimit, currentSpecial) {
  for (let n = 0; n < specialLimit; n++) {
    if (n < currentSpecial) {
      add([
        sprite("special-point-empty"),
        pos(n * 22, height() - 40),
        scale(2),
        layer("ui"),
        origin("botleft"),
        "sp"
      ]);
    }

    add([
      sprite("special-point-filled"),
      pos(n * 22, height() - 40),
      scale(2),
      layer("game"),
      origin("botleft"),
      "sp"
    ]);
  }
}