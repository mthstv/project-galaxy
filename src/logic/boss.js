import { BOSS_SPAWN_BACKGROUND_LIMIT } from '../helpers/constants.js';

function loadBossShootingPattern(boss) {
  const player = get('player')[0];
  boss.play('idle', { loop: true, speed: 3.5 });
  let counter = 0;
  const canceller = loop(1.5, () => {
    for (let n = 1; n <= 6; n++) {
      add([
        sprite('enemy-bullet'),
        area({ scale: 0.5 }),
        origin('center'),
        pos(boss.pos.x + (n % 2 === 0 ? 0 : 50), boss.pos.y + 40),
        scale(2),
        health(40),
        'enemy-bullet',
        'enemy',
        'hide-damage',
        {
          damage: 4,
          ySpeed: 50 * (n / 3),
          xSpeed: (6 - n) * 30,
        },
      ]);

      if (n < 6) {
        add([
          sprite('enemy-bullet'),
          area({ scale: 0.5 }),
          origin('center'),
          pos(boss.pos.x - (n % 2 === 0 ? 0 : 50), boss.pos.y + 40),
          scale(2),
          health(40),
          'enemy-bullet',
          'enemy',
          'hide-damage',
          {
            damage: 4,
            ySpeed: 50 * (n / 3),
            xSpeed: (6 - n) * -30,
          },
        ]);
      }

      const { x: posX, y: posY } = player.pos;

      add([
        sprite('enemy-bullet'),
        area({ scale: 0.5 }),
        origin('center'),
        color(150, 20, 20),
        pos(boss.pos.x - (n % 2 === 0 ? 0 : 50), boss.pos.y + 40),
        scale(2),
        health(40),
        'tracing-enemy-bullet',
        'enemy',
        'hide-damage',
        {
          damage: 5,
          speed: 120,
          currentPlayerPosX: posX,
          currentPlayerPosY: posY,
        },
      ]);
    }
    counter++;
  });
  return canceller;
}

export default function loadBoss(scoreCounter) {
  const player = get('player')[0];

  if (player && player.backgroundProgression === BOSS_SPAWN_BACKGROUND_LIMIT) {
    player.backgroundProgression++;
    wait(2, () => {
      const boss = add([
        sprite('doom'),
        pos(center().x, -130),
        area({ scale: 0.5 }),
        scale(7),
        origin('center'),
        health(1800),
        layer('game'),
        'enemy',
        'boss',
        { damage: 5 },
      ]);

      boss.play('closed');

      let canceller = () => ({});
      wait(6, () => {
        boss.play('opening');
      });
      wait(8, () => {
        canceller = loadBossShootingPattern(boss);
      });

      onUpdate('boss', (b) => {
        b.moveTo(center().x, 180, 40);
        if (b.hp() <= 0) {
          b.destroy();
          canceller();
          scoreCounter.value += 200;
          scoreCounter.text = scoreCounter.value;
          wait(2, () => go('end', scoreCounter, player.asteroidsDestroyed));
        }
      });
    });

    onUpdate('tracing-enemy-bullet', (b) => {
      b.moveTo(b.currentPlayerPosX, b.currentPlayerPosY, b.speed);

      if (
        (player.isColliding(b) && player.isInvincible()) ||
        b.pos.y > height() ||
        b.pos.x < 0 ||
        b.pos.x > width() ||
        (b.pos.x === b.currentPlayerPosX && b.pos.y === b.currentPlayerPosY)
      ) {
        b.destroy();
      }
    });
    onUpdate('enemy-bullet', (b) => {
      b.move(b.xSpeed, b.ySpeed);

      if (
        b.pos.y > height() ||
        (!b.is('healthless') && b.hp() <= 0) ||
        b.pos.x < 0 ||
        b.pos.x > width()
      ) {
        b.destroy();
      }
    });
  }
}
