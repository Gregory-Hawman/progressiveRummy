import setDecks from './SetDecks';

export default function ReadyUp({playerAmountSelected, setPlayerAmountSelected, playerCount, setDeckCount, cards}) {
    setPlayerAmountSelected(!playerAmountSelected)
    if(playerCount === 2) {
      setDecks(2)
    } else {
      setDecks(Math.ceil(playerCount/2))
    }
    setDeckCount(cards.length)
  };