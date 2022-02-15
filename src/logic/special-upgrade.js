import { handleRandomPoweUps } from './power-ups.js';

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

  handleRandomPoweUps();

  play("upgrade", { volume: 2 });
}