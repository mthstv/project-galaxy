import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
import loadLanguage from "./languages.js";
import { loadMenuScene } from "./scenes/menu.js";
import { loadGameScene } from "./scenes/game.js";
import { loadEndScene } from "./scenes/end.js";
import loadAssets from "./logic/assets.js";
import { browserLanguage } from "./helpers/constants.js";

kaboom({
	global: true,
	debug: true,
	scale: 1,
	width: 1280,
	height: 720,
	font: "sinko",
	canvas: document.querySelector("#galaxy"),
	background: [0, 0, 0],
});

volume(0.2);

loadAssets();

const currentLanguage = await loadLanguage(browserLanguage);

loadGameScene(currentLanguage);
loadMenuScene(currentLanguage);
loadEndScene(currentLanguage);

go("menu");