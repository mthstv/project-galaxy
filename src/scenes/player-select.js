export function loadMenuScene(currentLanguage) {
  const bgWidth = width() > 1280 ? width() : 1280;
  const bgHeight = height() > 720 ? height() : 720;

  scene('menu', () => {
    const bg = add([fixed(), z(0)]);

    const ui = add([fixed(), z(1)]);

    bg.add([
      sprite('galaxy3', { width: bgWidth, height: bgHeight }),
      pos(0, 0),
    ]);

    ui.add([
      text(currentLanguage.playerSelect, { font: 'sinko' }),
      pos(center().x, height() - 80),
      anchor('center'),
      scale(2),
    ]);

    onKeyPress('space', () => {
      go('game');
    });
    onClick(() => {
      go('game');
    });
  });
}
