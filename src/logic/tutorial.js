export default function loadTutorial(currentLanguage) {
  add([
    text(currentLanguage.tutorial, 16),
    pos(center().x, center().y - 40),
    origin("center"),
    layer("ui"),
    scale(2),
    lifespan(4),
  ]);
}
