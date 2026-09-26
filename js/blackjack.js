import Card from './Card.js';

const CLUB = 0, DIAMOND = 1, HEART = 2, SPADE = 3;
const ACE = 0, TWO = 1, THREE = 2, FOUR = 3, FIVE = 4, SIX = 5, SEVEN = 6, EIGHT = 7, NINE = 8, TEN = 9, JACK = 10, QUEEN = 11, KING = 12;

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const testCard = new Card(KING, DIAMOND);

function loop() {
  ctx.fillStyle = 'rgb(85 170 85)';
  ctx.fillRect(0, 0, width, height);

  testCard.draw(ctx, 80, 80);

  requestAnimationFrame(loop);
}

loop();
