import loadSpecialUpgrade from "./special-upgrade.js";

export default function loadPlayerSpecialMeter(specialLimit, currentSpecial) {
  for (let n = 1; n <= specialLimit; n++) {
    if (n <= currentSpecial) {
      add([
        sprite("special-point-empty"),
        pos((n - 1) * 22, height() - 40),
        scale(2),
        layer("ui"),
        origin("botleft"),
        "sp"
      ]);
    }

    add([
      sprite("special-point-filled"),
      pos((n - 1) * 22, height() - 40),
      scale(2),
      layer("game"),
      origin("botleft"),
      "sp"
    ]);
  }
  if (specialLimit <= currentSpecial) {
    destroyAll("sp");
    loadPlayerSpecialMeter(specialLimit, 0);

    const player = get("player")[0];
    player.special = 0;

    loadSpecialUpgrade(player);
  }
}