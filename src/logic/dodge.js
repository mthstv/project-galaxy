export default function loadDodge() {
  const player = get("player")[0];

  keyPress("z", () => {
    if (!player.isAlive()) {
      return;
    }
    player.invincible = true;
    player.moveSpeed = player.moveSpeed * 1.8;
    let n = 0;
    const canceller = loop(0.08, () => {
      if (player.isInvincible() && n < 6) {
        const dash = add([
          sprite("nav-dash"),
          pos(player.pos),
          layer("shadow"),
          scale(2),
          origin("center"),
          lifespan(0.3),
          opacity(0.7),
          "dash"
        ]);
        dash.play("dash", { loop: true, speed: 8 });
        n++;
      }
    });
    wait(0.4, () => {
      canceller();
      player.invincible = false;
      player.moveSpeed = player.moveSpeed / 1.8;
    });
  });
}