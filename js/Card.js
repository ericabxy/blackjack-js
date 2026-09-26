let cardsImage = document.getElementById('cardSource');
let cardWidth = cardsImage.width / 13;
let cardHeight = cardsImage.height / 5;
let ratio = cardHeight / cardWidth;

class Card {
  rank;
  suit;

  constructor (rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
  
  drawCardBack (g, x, y) {
    this.doDraw(g, x, y, cardWidth * 2, cardHeight * 4);
  }

  doDraw (g, x, y, xoff, yoff) {
    if (cardsImage != null) {
        g.drawImage(cardsImage, xoff, yoff, cardWidth, cardHeight, x, y, cardWidth, cardHeight);
    }
  }
  
  draw (g, x, y) {
    this.doDraw(g, x, y, this.rank * cardWidth, this.suit * cardHeight);
  }
}

export default Card;
