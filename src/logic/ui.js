export default function loadUi() {
  const scoreCounter = add([
    text(0),
    origin("topleft"),
    layer("ui"),
    scale(2),
    { value: 0 },
  ]);

  return scoreCounter;
}
