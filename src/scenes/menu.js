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
      text(currentLanguage.title, { font: "sinko", size: 16 }),
      pos(center().x, center().y - 150),
      origin("center"),
      layer("ui"),
      scale(2),
    ]);

    add([
      text(currentLanguage.subtitle, { font: "sinko", size: 16 }),
      pos(center().x, center().y + 30),
      origin("center"),
      layer("ui"),
      scale(2),
    ]);
  
    add([
      text('developed by @m4ths_dev', { font: "sinko", size: 16 }),
      pos(width(), height() - 35),
      origin("right"),
      layer("ui"),
      scale(1),
    ]);

    add([
      text('pixel arts by @m4ths_dev and @breelbo', { font: "sinko", size: 16 }),
      pos(width(), height() - 15),
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

    // onKeyPressRep("backspace", () => {
    //   input.text = input.text.substring(0, input.text.length - 1);
    // });

    add([
      text(currentLanguage.personalBest + playerBest, { font: "sinko", size: 16 }),
      pos(center().x, center().y + 200),
      origin("center"),
      layer("ui"),
      scale(2),
    ]);

    onKeyPress("space", () => {
      // setData("player-name", input.text);
      go("game");
    });
    onClick(() => {
      go("game");
    });
  });
}