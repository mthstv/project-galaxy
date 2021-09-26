export function loadMenuScene(currentLanguage) {
  const bgWidth = width() > 1280 ? width() : 1280;
  const bgHeight = height() > 720 ? height() : 720;

  scene("menu", () => {
    // let playerName = getData("player-name", "") || "";
    let playerBest = getData("player-best", 0) || 0;

    layers([
      "bg",
      "ui",
    ], "menu");

    add([
      sprite("galaxy-stars", { width: bgWidth, height: bgHeight}),
      pos(0, 0),
      layer("bg"),
    ]);

    add([
      text(currentLanguage.title),
      pos(center()),
      origin("center"),
      layer("ui"),
      scale(2),
    ]);
  
    add([
      text(currentLanguage.subtitle),
      pos(center().x, center().y + 60),
      origin("center"),
      layer("ui"),
      scale(2),
    ]);
  
    add([
      text('developed by @m4ths_dev'),
      pos(width(), height() - 20),
      origin("right"),
      layer("ui"),
      scale(1),
    ]);

    add([
      text('pixel arts by @m4ths_dev and @breelbo'),
      pos(width(), height() - 10),
      origin("right"),
      layer("ui"),
      scale(1),
    ]);

    // const nameLabel = add([
    //   text(currentLanguage.nameInput),
    //   pos(0, 0),
    //   origin("topleft"),
    //   layer("ui"),
    //   scale(2),
    // ]);

    // const input = add([
    //   text(playerName),
    //   pos(nameLabel.width * 2, 0),
    //   origin("topleft"),
    //   layer("ui"),
    //   scale(2),
    // ]);
  
    // charInput((ch) => {
    //   if (ch !== " ") {
    //     input.text += ch;
    //   }
    // });

    // keyPressRep("backspace", () => {
    //   input.text = input.text.substring(0, input.text.length - 1);
    // });

    add([
      text(currentLanguage.personalBest + playerBest),
      pos(center().x, center().y + 380),
      origin("center"),
      layer("ui"),
      scale(2),
    ]);

    keyPress("space", () => {
      // setData("player-name", input.text);
      go("game");
    });
    mouseClick(() => {
      go("game");
    });
  });
}