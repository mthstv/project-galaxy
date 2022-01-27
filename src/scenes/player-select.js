export function loadMenuScene(currentLanguage) {
  const bgWidth = width() > 1280 ? width() : 1280;
  const bgHeight = height() > 720 ? height() : 720;

  scene("menu", () => {
    layers([
      "bg",
      "ui",
    ], "menu");

    add([
      sprite("galaxy3", { width: bgWidth, height: bgHeight, }),
      pos(0, 0),
      layer("bg"),
    ]);
  
    add([
      text(currentLanguage.playerSelect, { font: "sinko" }),
      pos(center().x, height() - 80),
      origin("center"),
      layer("ui"),
      scale(2),
    ]);

    onKeyPress("space", () => {
      go("game");
    });
    onClick(() => {
      go("game");
    });
  });
}