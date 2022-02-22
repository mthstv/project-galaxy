export default function loadOrb(originPos) {
  const player = get("player")[0];
  const orb = add([
    sprite("orb"),
    pos(originPos),
    scale(1.2),
    area({ scale: 0.8 }),
    origin("center"),
    "orb",
    "collectable",
    color(0, 229, 255),
  ]);

  const rectangle1 = add([
    pos(originPos.x, originPos.y - 10),
    rect(30, 16),
    rotate(135),
    origin("center"),
    color(0, 229, 255),
    opacity(0.2),
    "trail",
    area(),
  ]);

  const rectangle2 = add([
    pos(originPos.x, originPos.y - 25),
    rect(26, 12),
    rotate(135),
    origin("center"),
    color(0, 229, 255),
    opacity(0.2),
    "trail",
    area(),
  ]);

  const rectangle3 = add([
    pos(originPos.x, originPos.y - 40),
    rect(24, 10),
    rotate(135),
    origin("center"),
    color(0, 229, 255),
    opacity(0.2),
    "trail",
    area(),
  ]);

  const rectangle4 = add([
    pos(originPos.x, originPos.y - 50),
    rect(22, 8),
    rotate(135),
    origin("center"),
    color(0, 229, 255),
    opacity(0.2),
    "trail",
    area(),
  ]);

  const rectangle5 = add([
    pos(originPos.x, originPos.y - 60),
    rect(18, 6),
    rotate(135),
    origin("center"),
    color(0, 229, 255),
    opacity(0.2),
    "trail",
    area(),
  ]);

  const rectangle6 = add([
    pos(originPos.x, originPos.y - 70),
    rect(15, 4),
    rotate(135),
    origin("center"),
    color(0, 229, 255),
    opacity(0.2),
    "trail",
    area(),
  ]);

  orb.play("idle", { loop: true });
  orb.onUpdate(() => {
    rectangle1.angle = rectangle1.pos.angle(player.pos);
    rectangle2.angle = rectangle2.pos.angle(player.pos);
    rectangle3.angle = rectangle3.pos.angle(player.pos);
    rectangle4.angle = rectangle4.pos.angle(player.pos);
    rectangle5.angle = rectangle5.pos.angle(player.pos);
    rectangle6.angle = rectangle6.pos.angle(player.pos);
    orb.moveTo(player.pos.x, player.pos.y, 700);
    rectangle1.moveTo(player.pos.x, player.pos.y, 720);
    rectangle2.moveTo(player.pos.x, player.pos.y, 720);
    rectangle3.moveTo(player.pos.x, player.pos.y, 720);
    rectangle4.moveTo(player.pos.x, player.pos.y, 720);
    rectangle5.moveTo(player.pos.x, player.pos.y, 720);
    rectangle6.moveTo(player.pos.x, player.pos.y, 720);
  })
}