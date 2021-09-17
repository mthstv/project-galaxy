export default function loadDodge() {
  const player = get("player")[0];

  keyPress("z", () => {
    if (!player.isAlive()) {
      return;
    }
    player.invincible = true;
    player.moveSpeed = player.moveSpeed * 1.8;
    let n = 0;
    loop(0.1, () => {
      if (player.isInvincible() && n < 5) {
        add([
          sprite("nav-dash", { anim: "dash", }),
          pos(player.pos),
          layer("shadow"),
          scale(2),
          origin("center"),
          lifespan(0.5),
          "dash"
        ]);
        n++;
      }
    });
    wait(0.5, () => {
      player.invincible = false;
      player.moveSpeed = player.moveSpeed / 1.8;
    });
  });
}