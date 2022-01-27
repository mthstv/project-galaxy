import { BULLET_SPEED } from "../helpers/constants.js";

export default function loadBulletSpeed() {
  onUpdate("bullet", (b) => {
    if (b.is("diagonal-left")) {
      b.move(-(BULLET_SPEED / 5), -BULLET_SPEED);
    } else if (b.is("diagonal-right")) {
      b.move((BULLET_SPEED / 5), -BULLET_SPEED);
    } else {
      b.move(0, -BULLET_SPEED);
    }

    if (b.pos.y < 0) {
      b.destroy();
    }
  });
}