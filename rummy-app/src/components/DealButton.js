function DealCards(round, roundLimit, deckPile, deckCount, setDeckCount, playerCount) {
  let dealer = round;
  if (dealer > playerCount){
    if((dealer - playerCount) > playerCount ){
      dealer = dealer - playerCount * 2
    } else {
      dealer = dealer - playerCount
    }
  };
  let i = dealer - 1;
  let ss = i; //starting spot
  let cont = true;
  while (cont) {
    if (i === playerCount){
      i = 0
    }

    let dealtCard = deckPile.shift()
    setDeckCount(deckCount - (roundLimit * playerCount))
    playersList[i].hand.push(dealtCard)

    if (ss === 0 && playersList[ss + (playerCount - 1)].hand.length === roundLimit){
      cont = false
    }
    if (ss > 0 && playersList[ss - 1].hand.length === roundLimit){
      cont = false
    }

    i++
  };
};

export default DealCards