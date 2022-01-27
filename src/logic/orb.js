export default function loadOrb(originPos) {
  const player = get("player")[0];
  const orb = add([
    sprite("orb"),
    pos(originPos),
    scale(1),
    area({ scale: 0.8 }),
    origin("center"),
    "orb",
    "collectable",
    color(0, 229, 255),
  ]);
  orb.play("idle", { loop: true });
  orb.onUpdate(() => {
    orb.moveTo(player.pos.x, player.pos.y, 700);
  })
}