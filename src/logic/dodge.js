export default function loadDodge() {
  const player = get("player")[0];

  keyPress("z", () => {
    player.invincible = true;
    let n = 0;
    loop(0.1, () => {
      if (player.isInvincible() && n < 5) {
        const shadow = add([
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
    });
  });
}