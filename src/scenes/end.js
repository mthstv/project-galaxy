export function loadEndScene(currentLanguage) {
  const bgWidth = width() > 1280 ? width() : 1280;
  const bgHeight = height() > 720 ? height() : 720;

  scene("end", (playerScore) => {
    let playerBest = getData("player-best", 0) || 0;

    if (playerScore.value > playerBest) {
      playerBest = playerScore.value;
      setData("player-best", playerScore.value);
    }

    layers([
      "bg",
      "ui",
    ], "end");
  
    add([
      sprite("galaxy", { width: bgWidth, height: bgHeight, }),
      pos(0, 0),
      layer("bg"),
    ]);

    add([
      text(currentLanguage.battleReport.title),
      pos(center().x, center().y - 120),
      origin("center"),
      layer("ui"),
      scale(4),
    ]);
  
    add([
      text(currentLanguage.battleReport.asteroids + playerScore.value, 64),
      pos(center().x, center().y + 80),
      origin("center"),
      layer("ui"),
      scale(3),
    ]);
  
    keyPress("space", () => {
      go("menu", playerBest);
    });
    mouseClick(() => {
      go("menu", playerBest);
    });
  });
}