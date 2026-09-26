import Ball from './js/Ball.js';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const testBall = new Ball(50, 100, 4, 4, 'blue', 10);
const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = 'rgb(0 0 0 / 25%';
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw(ctx);
    ball.update();
  }

  requestAnimationFrame(loop);
}

loop();
