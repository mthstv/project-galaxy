import { PLAYER_SPECIAL_LIMIT } from "../helpers/constants.js";
import loadSpecialUpgrade from "./special-upgrade.js";

export default function loadPlayerSpecialMeter(specialLimit = PLAYER_SPECIAL_LIMIT, currentSpecial = 0) {
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
    const player = get("player")[0];
    player.special = 0;
    player.reloadMeters();
    loadSpecialUpgrade(player);
  }
}