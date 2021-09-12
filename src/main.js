import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
import loadLanguage from "./languages.js";
import { loadMenuScene } from "./scenes/menu.js";
import { loadGameScene } from "./scenes/game.js";
import loadAssets from "./assets/load.js";

kaboom({
	global: true,
	// debug mode (F1 to inspect, F8 to pause, F7 F9 to manipulate time, F10 to skip frame)
	debug: true,
	fullscreen: true,
	scale: 1,
	clearColor: [ 0, 0, 0, 1 ],
  font: "sinko",
});

loadAssets();

const currentLanguage = await loadLanguage(window.navigator.language);

// choose language
// let currentLanguage = {};
// if (window.navigator.language === "pt-BR") {
//   currentLanguage = languages.pt;
// } else {
//   currentLanguage = languages.en;
// }

loadGameScene(currentLanguage);
loadMenuScene(currentLanguage);

go("menu");