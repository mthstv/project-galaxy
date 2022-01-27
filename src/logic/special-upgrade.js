import { PLAYER_TOTAL_LIFE } from "../helpers/constants.js";

export default function loadSpecialUpgrade(player) {
  add([
    text("lvl up", { font: "sinko" }),
    pos(player.pos.x + 20, player.pos.y - 20),
    origin("botleft"),
    lifespan(0.8),
    scale(1.8),
    color(0, 177, 255)
  ]);
  player.lvl += 1;
  if (player.hp() < PLAYER_TOTAL_LIFE){
    player.heal(1);
  }
  player.reloadMeters();
  play("upgrade", { volume: 2 });
}