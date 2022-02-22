import { loadPowerUpUi } from './ui.js';
import loadLanguage from "../languages.js";
import { browserLanguage } from "../helpers/constants.js";

export default async function loadSpecialUpgrade(player) {
  add([
    text("lvl up", { font: "sinko" }),
    pos(player.pos.x + 20, player.pos.y - 20),
    origin("botleft"),
    lifespan(0.8),
    scale(1.8),
    color(0, 177, 255)
  ]);
  player.lvl += 1;

  play("upgrade", { volume: 1 });

  const currentLanguage = await loadLanguage(browserLanguage);
  loadPowerUpUi(currentLanguage);
  // handleRandomPoweUps();
}