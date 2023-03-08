export function loadMenuScene(currentLanguage) {
  const bgWidth = width() > 1280 ? width() : 1280;
  const bgHeight = height() > 720 ? height() : 720;

  scene('menu', () => {
    // let playerName = getData("player-name", "") || "";
    let playerBest = getData('player-best', 0) || 0;

    const bg = add([fixed(), z(0)]);
    const ui = add([fixed(), z(1)]);

    bg.add([
      sprite('galaxy-stars', { width: bgWidth, height: bgHeight }),
      pos(0, 0),
    ]);

    ui.add([
      text(currentLanguage.title, { font: 'sinko', size: 16 }),
      pos(center().x, center().y - 150),
      anchor('center'),
      scale(2),
    ]);

    ui.add([
      text(currentLanguage.subtitle, { font: 'sinko', size: 16 }),
      pos(center().x, center().y + 30),
      anchor('center'),
      scale(2),
    ]);

    ui.add([
      text('developed by @m4ths_dev', { font: 'sinko', size: 16 }),
      pos(width(), height() - 35),
      anchor('right'),
      scale(1),
    ]);

    ui.add([
      text('pixel arts by @m4ths_dev and @breelbo', {
        font: 'sinko',
        size: 16,
      }),
      pos(width(), height() - 15),
      anchor('right'),
      scale(1),
    ]);

    // const nameLabel = add([
    //   text(currentLanguage.nameInput),
    //   pos(0, 0),
    //   anchor("topleft"),
    //
    //   scale(2),
    // ]);

    // const input = add([
    //   text(playerName),
    //   pos(nameLabel.width * 2, 0),
    //   anchor("topleft"),
    //
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

    ui.add([
      text(currentLanguage.personalBest + playerBest, {
        font: 'sinko',
        size: 16,
      }),
      pos(center().x, center().y + 200),
      anchor('center'),
      scale(2),
    ]);

    onKeyPress('space', () => {
      // setData("player-name", input.text);
      go('game');
    });
    onClick(() => {
      go('game');
    });
  });
}
