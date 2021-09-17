export default function loadTutorial(currentLanguage) {
  add([
    text(currentLanguage.tutorialMovement),
    pos(center().x, center().y - 140),
    origin("center"),
    layer("ui"),
    scale(2),
    lifespan(5),
  ]);
  add([
    text(currentLanguage.tutorialShooting),
    pos(center().x, center().y - 80),
    origin("center"),
    layer("ui"),
    scale(2),
    lifespan(5),
  ]);
  add([
    text(currentLanguage.tutorialDodge),
    pos(center().x, center().y - 40),
    origin("center"),
    layer("ui"),
    scale(2),
    lifespan(5),
  ]);
}
