export function loadMenuScene(currentLanguage) {
  scene("menu", () => {
    layers([
      "bg",
      "ui",
    ], "menu");
  
    add([
      sprite("galaxy3", { width: width(), height: height(), }),
      pos(0, 0),
      layer("bg"),
    ]);
  
    add([
      text(currentLanguage.title, 64),
      pos(center()),
      origin("center"),
      layer("ui"),
      scale(2),
    ]);
  
    add([
      text(currentLanguage.subtitle, 16),
      pos(center().x, center().y + 60),
      origin("center"),
      layer("ui"),
      scale(2),
    ]);
  
    add([
      text('developed by @m4ths_dev', 8),
      pos(width(), height() - 20),
      origin("right"),
      layer("ui"),
      scale(1),
    ]);
  
    add([
      text('pixel arts by @m4ths_dev and @breelbo', 8),
      pos(width(), height() - 10),
      origin("right"),
      layer("ui"),
      scale(1),
    ]);
  
    keyPress("space", () => {
      go("game");
    });
  });
}