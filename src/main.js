import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
import loadLanguage from "./languages.js";
import { loadMenuScene } from "./scenes/menu.js";
import { loadGameScene } from "./scenes/game.js";
import { loadEndScene } from "./scenes/end.js";
import loadAssets from "./logic/assets.js";
import { browserLanguage, isMobile } from "./helpers/constants.js";

kaboom({
	global: true,
	debug: true,
	stretch: true,
	letterbox: true,
	scale: isMobile ? 1 : 0.7,
	clearColor: [ 0, 0, 0, 1 ],
	font: "sinko",
});

loadAssets();

const currentLanguage = await loadLanguage(browserLanguage);

loadGameScene(currentLanguage);
loadMenuScene(currentLanguage);
loadEndScene(currentLanguage);

go("menu");