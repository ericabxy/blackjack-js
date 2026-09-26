class Card {
  rank;
  suit;

  constructor (rank, suit) {
    this.suit = suit;
  }

  doDraw (g, x, y, xoff, yoff) {
    g.beginPath();
    g.rect(x, y, x + 50, y + 100);
    g.strokeStyle = "rgb(0 0 255 / 50%)";
    g.stroke();
    g.closePath();
  }

export default Card;
