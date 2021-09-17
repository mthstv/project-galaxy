export default function loadTutorial(currentLanguage) {
  add([
    text(currentLanguage.tutorial),
    pos(center().x, center().y - 80),
    origin("center"),
    layer("ui"),
    scale(2),
    lifespan(4),
  ]);
  add([
    text(currentLanguage.tutorialDodge),
    pos(center().x, center().y - 40),
    origin("center"),
    layer("ui"),
    scale(2),
    lifespan(4),
  ]);
}
