import Ball from './js/Ball.js';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}

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
    ball.update(width, height);
  }

  requestAnimationFrame(loop);
}

loop();
