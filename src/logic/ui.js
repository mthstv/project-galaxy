export default function loadUi() {
  const scoreCounter = add([
    text(0, { font: "sinko", size: 32 }),
    origin("topleft"),
    layer("ui"),
    scale(2),
    { value: 0 },
  ]);

  return scoreCounter;
}
