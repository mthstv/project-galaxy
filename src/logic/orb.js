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

  const rectangle1 = add([
    pos(originPos.x, originPos.y - 10),
    rect(20, 8),
    rotate(135),
    origin("center"),
    color(0, 229, 255),
    opacity(0.5),
    "trail",
    area(),
  ]);

  const rectangle2 = add([
    pos(originPos.x, originPos.y - 25),
    rect(16, 7),
    rotate(135),
    origin("center"),
    color(0, 229, 255),
    opacity(0.5),
    "trail",
    area(),
  ]);

  const rectangle3 = add([
    pos(originPos.x, originPos.y - 40),
    rect(14, 6),
    rotate(135),
    origin("center"),
    color(0, 229, 255),
    opacity(0.5),
    "trail",
    area(),
  ]);

  const rectangle4= add([
    pos(originPos.x, originPos.y - 50),
    rect(12, 5),
    rotate(135),
    origin("center"),
    color(0, 229, 255),
    opacity(0.5),
    "trail",
    area(),
  ]);

  orb.play("idle", { loop: true });
  orb.onUpdate(() => {
    rectangle1.angle = rectangle1.pos.angle(player.pos);
    rectangle2.angle = rectangle2.pos.angle(player.pos);
    rectangle3.angle = rectangle3.pos.angle(player.pos);
    rectangle4.angle = rectangle4.pos.angle(player.pos);
    orb.moveTo(player.pos.x, player.pos.y, 700);
    rectangle1.moveTo(player.pos.x, player.pos.y, 700);
    rectangle2.moveTo(player.pos.x, player.pos.y, 700);
    rectangle3.moveTo(player.pos.x, player.pos.y, 700);
    rectangle4.moveTo(player.pos.x, player.pos.y, 700);
  })
}