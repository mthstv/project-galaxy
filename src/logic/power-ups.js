import { INITIAL_PLAYER_TOTAL_LIFE } from "../helpers/constants.js";
import loadCounter from "./counter.js";

export function handleRandomPoweUps() {
  const player = get("player")[0];
  const keys = Object.keys(player.powerUps);

  const firstPowerUp = keys[ keys.length * Math.random() << 0];
  const secondPowerUp = keys[ keys.length * Math.random() << 0];
  const thirdPowerUp = keys[ keys.length * Math.random() << 0];

  console.log(firstPowerUp, ' / ', secondPowerUp, ' / ', thirdPowerUp);

  const chosenPowerUp = firstPowerUp;
  if(chosenPowerUp === 'heals') healPowerUp(player);
}

export function healPowerUp(player) {
  let healAmount = 0;

  if (player.powerUps.heals === 0) {
    healAmount = Math.ceil(INITIAL_PLAYER_TOTAL_LIFE * 0.8);
  }

  if (player.powerUps.heals === 1) {
    healAmount = Math.ceil(INITIAL_PLAYER_TOTAL_LIFE * 0.5);
  }

  if (player.powerUps.heals >= 2) {
    healAmount = Math.ceil(INITIAL_PLAYER_TOTAL_LIFE * 0.2);
  }

  healAmount = healAmount + player.hp() < INITIAL_PLAYER_TOTAL_LIFE ? healAmount : INITIAL_PLAYER_TOTAL_LIFE - player.hp();

  player.heal(healAmount);
  player.powerUps.heals++;

  player.reloadMeters();

  loadCounter(healAmount, player.pos, null, false, true, null);
}