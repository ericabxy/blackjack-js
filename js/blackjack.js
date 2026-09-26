import Card from './Card.js';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const testCard = new Card('Ace', 'Spades');

function loop() {
  ctx.fillStyle = 'rgb(85 170 85)';
  ctx.fillRect(0, 0, width, height);

  testCard.doDraw(ctx, 80, 80, 0, 3);

  requestAnimationFrame(loop);
}

loop();
