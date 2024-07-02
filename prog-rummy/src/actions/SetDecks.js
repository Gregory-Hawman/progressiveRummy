const suits = ['S', 'H', 'C', 'D'];
const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const jokers = ['JoR', 'JoB']
let cards = [];

export default function setDecks(deckAmount) {
    let d = 0
    while ( d < deckAmount ) {
      for(let i=0; i < suits.length; i++) {
        for(let j=0; j < values.length; j++) {
          cards.push(`${values[j]}${suits[i]} `)
        }
      }
      for (let i=0; i < jokers.length; i++ ) {
        cards.push(`${jokers[i]}`)
      }
      d++;
    }

    return cards
};