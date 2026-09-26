let cardsImage = document.getElementById('cardSource');
let cardWidth = cardsImage.width / 13;
let cardHeight = cardsImage.height / 5;

class Card {
  rank;
  suit;

  constructor (rank, suit) {
    this.suit = suit;
  }
  
  drawCardBack(g, x, y) {
  }

  doDraw (g, x, y, xoff, yoff) {
    if (cardsImage != null) {
        g.drawImage(cardsImage, xoff * cardWidth, yoff * cardHeight, cardWidth, cardHeight, x, y, cardWidth, cardHeight);
    }
  }
}

export default Card;
